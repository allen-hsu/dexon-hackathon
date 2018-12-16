pragma solidity ^0.4.25;

contract Book
{
    // 佈署的時候決定段落總數,每段字數上限
    constructor(uint32 maxPart, uint32 maxChar) public
    {
        owner = msg.sender;
        totalPart = maxPart;
        maxCharPerPart = maxChar;
        init();
    }
    
    // 段落更新成功時發送通知
    event storyUpdated(uint32 partID, address author, uint256 currentValue, uint8 color, uint8 font, string content);
    
    // 段落定義
    struct StoryPart
    {
        uint32 id;              //段落編號
        address author;         //該段落目前作者
        uint256 currentValue;   //目前價值
        uint8 color;            //文字顏色
        uint8 font;             //文字字型
        string content;         //段落文字內容
        uint256 timestamp;      //交易完成時間
    }
    
//region members
    // public 所有段落內容
    StoryPart[] public parts;
    
    // public 獎金池
    uint256 public rewardPool = 0;
    
    // public 排行榜 (作者錢包地址與貢獻段落數量)
    mapping(address => uint32) public leaderboard;
    
    // public 已結束編輯了嗎，若結束編輯則所有會更動資料的功能都不能用
    bool public isEnd = false;
    
    // 我們服務用的錢包地址
    address owner;
    
    // 每段字數上限
    uint32 maxCharPerPart;
    
    // 段落總數
    uint32 totalPart;
    
    // 所有段落的初始價值 1 Dexon
    uint256 defaultValue = 1e18;

    uint storedData;
//endregion

//region buy function    
      

    function set(uint x) public payable {
        storedData = x;
    }

    function get() public view returns (uint) {
        return storedData;
    }
    // 使用者購買段落所有權
    function buyStoryPart(uint32 partID, uint8 color, uint8 font, string memory content)
    editable inBook(partID) public  payable
    {
        // 檢查交易金額
        uint256 value = msg.value;
        require(value >= parts[partID].currentValue / 2 * 3);
        
        // 檢查字數
        require(bytes(content).length <= maxCharPerPart);
        
        // 發錢囉
        address lastAuthor = parts[partID].author;
        uint256 lastValue = parts[partID].currentValue;
        // 判斷有沒有使用者編輯過此段落
        if(lastAuthor == owner)
        {
            uint256 n = value / 10;
            // 給我們的酬勞
            withdrawToSomeone(owner, n * 9);
            // 進入獎金池
            rewardPool += n;
        }
        else
        {
            // 先讓前一位作者拿回本金
            withdrawToSomeone(lastAuthor, lastValue);
            // 分配剩餘金額
            uint256 m = value - lastValue;
            m = m / 10;
            // 前一位作者的紅利
            withdrawToSomeone(lastAuthor, m * 5);
            // 給我們的酬勞
            withdrawToSomeone(owner, m * 4);
            // 進入獎金池
            rewardPool += m;
        }
        
        //交易成立，更改段落
        StoryPart memory part = StoryPart(partID, msg.sender, value, color, font, content, block.timestamp);
        parts[partID] = part;
        //更新排行榜
        leaderboard[msg.sender] ++;
        if(lastAuthor != owner) leaderboard[lastAuthor] --;
        //發送更動段落的通知
        emit storyUpdated(partID, msg.sender, value, color, font, content);
    }
//endregion  
    
//region the end
    // 結束編輯此書
    function theEnd() editable onlyOwner public
    {
        isEnd = true;
        uint256 n = rewardPool / totalPart;
        for(uint32 i = 0; i < totalPart ; i++)
        {
            withdrawToSomeone(parts[i].author, n);
        }
    }
//endregion
    
//region get function
    function getStoryPartCount() public view returns(uint256) {
        return parts.length;
    }
    // 輸入故事段落編號，取得該段落上次出價金額
    function getLastValueByID(uint32 partID) public view returns(uint256)
    {
        return parts[partID].currentValue;
    }
    
    // 輸入故事段落編號，取得該段落作者Dexon錢包地址 (暱稱需另外儲存在我們自己的Server上，否則更改暱稱需經過區塊鏈運算)
    function getAuthorAddressByID(uint32 partID) public view returns(address)
    {
        return parts[partID].author;
    }
    
    // 輸入故事段落編號，取得該段落文字內容
    function getContentByID(uint32 partID) public view returns(string memory)
    {
        return parts[partID].content;
    }
    
    // 輸入故事段落編號，取得該段落文字顏色
    function getColorByID(uint32 partID) public view returns(uint8)
    {
        return parts[partID].color;
    }
    
    // 輸入故事段落編號，取得該段落文字字型
    function getFontByID(uint32 partID) public view returns(uint8)
    {
        return parts[partID].font;
    }
//endregion

//region private function   
    // 初始化所有段落
    function init () private
    {
        for(uint32 i = 0; i < totalPart ; i++)
        {
            StoryPart memory part = StoryPart(i, owner, defaultValue, 0, 0, "", block.timestamp);
            parts.push(part);
        }
    }
    
    // 轉帳出去
    function withdrawToSomeone(address someone, uint amount) private returns(bool) {
        require(amount <= address(this).balance);
        address(someone).transfer(amount);
        return true;
    }
    
    // 我們服務專用的功能
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
    
    // 是在範圍內的段落編號
    modifier inBook(uint32 partID) {
        require(partID < totalPart);
        _;
    }
    
    // 判斷書還可以編輯
    modifier editable() {
        require(!isEnd);
        _;
    }
//endregion
    
}