pragma solidity ^0.5.0;

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
    
    event storyUpdated(uint32 partID, address author, uint256 currentValue, uint8 color, uint8 font, string content);
    
    // 段落定義
    struct StoryPart
    {
        uint32 id;              //段落編號
        address payable author;         //該段落目前作者
        uint256 currentValue;   //目前價值
        uint8 color;            //文字顏色
        uint8 font;             //文字字型
        string content;         //段落文字內容
    }
    
//region members
    // public 所有段落內容
    StoryPart[] public parts;
    
    // public 獎金池
    uint256 public rewardPool = 0;
    
    // 我們服務用的錢包地址
    address payable owner;
    
    // 每段字數上限
    uint32 maxCharPerPart;
    
    // 段落總數
    uint32 totalPart;
    
    // 所有段落的初始價值 1 Dexon
    uint256 defaultValue = 1e18;
    
    // 下次增額的倍率
    // ufixed8x8 nextValueRate = 1.5;
//endregion

//region buy function    
    // 使用者購買段落所有權
    function buyStoryPart(uint32 partID, uint8 color, uint8 font, string memory content) inBook(partID) public  payable
    {
        // 檢查交易金額
        uint256 value = msg.value;
        require(value >= parts[partID].currentValue / 2 * 3);
        
        // 檢查字數
        require(bytes(content).length <= maxCharPerPart);
        
        // 發錢囉
        // 先讓前一位作者拿回本金
        uint256 lastValue = parts[partID].currentValue;
        withdrawToSomeone(parts[partID].author, lastValue);
        // 分配剩餘金額
        uint256 n = value - lastValue;
        n = n / 10;
        // 前一位作者的紅利
        withdrawToSomeone(parts[partID].author, n * 5);
        // 給我們的酬勞
        withdrawToSomeone(owner, n * 4);
        // 進入獎金池
        rewardPool += n;
        
        //交易成立，更改段落
        StoryPart memory part = StoryPart(partID, msg.sender, value, color, font, content);
        parts[partID] = part;
        emit storyUpdated(partID, msg.sender, value, color, font, content);
    }
//endregion  
    
//region get function
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
            StoryPart memory part = StoryPart(i, owner, defaultValue, 0, 0, "");
            parts.push(part);
        }
    }
    
    function withdrawToSomeone(address payable someone, uint amount) private returns(bool) {
        require(amount < address(this).balance);
        address(someone).transfer(amount);
        return true;
    }
     
    //結束
    // function endBook() onlyOwner public
    // {
    //      emit selfdestruct(owner);
    // }
    
    //我們服務專用的功能
    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }
    
    //是在範圍內的段落編號
    modifier inBook(uint32 partID) {
        require(partID < totalPart);
        _;
    }
//endregion
    
}