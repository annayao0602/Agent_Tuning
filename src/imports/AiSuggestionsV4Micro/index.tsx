import svgPaths from "./svg-ilwnci1fh";

function Frame9() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[4px] relative shrink-0 w-[23px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] not-italic relative shrink-0 text-[#0e6ff9] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[22px]">Custom Instructions</p>
      </div>
    </div>
  );
}

function Line() {
  return (
    <div className="h-0 relative shrink-0 w-[33px]">
      <div className="absolute inset-[-3px_-360.61%_0_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152 3">
          <g id="Line 727">
            <line id="Line 726" stroke="var(--stroke-0, #0E6FF9)" strokeWidth="3" x2="152" y1="1.5" y2="1.5" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function TabItem() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[34px] items-start relative shrink-0 w-[152px]" data-name="Tab Item">
      <Frame9 />
      <Line />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center ml-0 mt-0 not-italic relative row-1 text-[#181825] text-[14px] w-[147px]">
        <p className="leading-[22px]">Column Descriptions</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[73px]">
      <Group />
    </div>
  );
}

function TabItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[34px] items-start relative shrink-0 w-[144px]" data-name="Tab Item">
      <Frame10 />
    </div>
  );
}

function Tab() {
  return (
    <div className="content-stretch flex gap-[14px] h-[34px] items-center relative shrink-0" data-name="Tab 1">
      <TabItem />
      <TabItem1 />
    </div>
  );
}

function TabBar() {
  return (
    <div className="absolute content-stretch flex flex-col h-[34px] items-center left-[20px] top-[20px]" data-name="Tab Bar">
      <Tab />
    </div>
  );
}

function EnableInstruction() {
  return (
    <div className="content-stretch flex gap-[18px] items-center justify-end relative shrink-0 w-full" data-name="Enable instruction">
      <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] not-italic relative shrink-0 text-[#29313b] text-[12px] whitespace-nowrap">Show diffs since last save</p>
      <div className="h-[18px] relative shrink-0 w-[36px]" data-name="Toggle">
        <div className="absolute inset-[0_-2.78%_-11.11%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 37 20">
            <g id="switch_ON">
              <rect fill="var(--fill-0, #0E6FF9)" height="8" id="groove" rx="4" width="24" y="5" />
              <g filter="url(#filter0_d_5_4661)" id="ring">
                <circle cx="27" cy="9" fill="var(--fill-0, white)" r="9" />
                <circle cx="27" cy="9" r="8.5" stroke="var(--stroke-0, #0E6FF9)" strokeOpacity="0.4" />
              </g>
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="20" id="filter0_d_5_4661" width="20" x="17" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="1" />
                <feGaussianBlur stdDeviation="0.5" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.3 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_4661" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_4661" mode="normal" result="shape" />
              </filter>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}

function InfoArea() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip py-[2px] relative shrink-0 w-[14px]" data-name="Info Area">
      <div className="h-[14px] relative shrink-0 w-full" data-name="Info">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.pc667e00} fill="var(--fill-0, #727679)" id="info" />
        </svg>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-[346px]">
      <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] min-w-px not-italic relative text-[#29313b] text-[14px]">Tell the bot about your business background, and the special requirements on the data.</p>
      <InfoArea />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0">
      <Frame1 />
    </div>
  );
}

function Box() {
  return (
    <div className="bg-[#f2f3f5] h-[188px] overflow-clip relative rounded-[4px] shrink-0 w-full" data-name="Box">
      <div className="absolute bg-[rgba(206,245,195,0.4)] h-[17px] left-[7px] top-[9px] w-[324px]" />
      <div className="absolute bg-[rgba(206,245,195,0.4)] h-[17px] left-[7px] top-[26px] w-[183px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[18px] left-[12px] not-italic text-[14px] text-black top-[6px] w-[332px]">A sale refers to an individual order which may contain multiple products.</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start relative shrink-0 w-full">
      <Box />
      <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#727679] text-[12px] text-right w-full">0/500</p>
    </div>
  );
}

function Requirements() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="requirements">
      <Frame />
      <Frame4 />
    </div>
  );
}

function InfoArea1() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[14px]" data-name="Info Area">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Info">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.pc667e00} fill="var(--fill-0, #727679)" id="info" />
        </svg>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] min-w-px not-italic relative text-[#29313b] text-[14px]">Specify the format of the responses that the bot should use.</p>
      <InfoArea1 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame2 />
    </div>
  );
}

function Box1() {
  return <div className="bg-[rgba(242,243,245,0.43)] h-[191px] relative rounded-[4px] shrink-0 w-full" data-name="Box" />;
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col h-[213px] items-start justify-center relative shrink-0 w-full">
      <Box1 />
    </div>
  );
}

function Format() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip relative shrink-0 w-full" data-name="format">
      <Frame5 />
      <Frame6 />
    </div>
  );
}

function InfoArea2() {
  return (
    <div className="h-[18px] overflow-clip relative shrink-0 w-[14px]" data-name="Info Area">
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[14px] top-1/2" data-name="Info">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <path d={svgPaths.pc667e00} fill="var(--fill-0, #727679)" id="info" />
        </svg>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] min-w-px not-italic relative text-[14px] text-[rgba(41,49,59,0.67)]">Specify the types of questions that should be rejected at the agent level.</p>
      <InfoArea2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame3 />
    </div>
  );
}

function Box2() {
  return <div className="bg-gradient-to-b from-[rgba(242,243,245,0.42)] h-[189px] relative rounded-[4px] shrink-0 to-[66.346%] to-[rgba(242,243,245,0.13)] w-full" data-name="Box" />;
}

function Frame8() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0 w-full">
      <Box2 />
      <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#727679] text-[12px] text-right w-full">0/500</p>
    </div>
  );
}

function Format1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[269px] items-start overflow-clip relative shrink-0 w-full" data-name="format">
      <Frame7 />
      <Frame8 />
    </div>
  );
}

function CustomInstructions() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[18px] items-start left-[17px] top-[76px] w-[346px]" data-name="Custom Instructions">
      <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#29313b] text-[12px] uppercase whitespace-nowrap">Custom INSTRUCTIONS</p>
      <EnableInstruction />
      <Requirements />
      <Format />
      <Format1 />
    </div>
  );
}

function Lightbulb() {
  return (
    <div className="absolute contents left-[330px] top-[656px]" data-name="lightbulb">
      <div className="absolute left-[330px] overflow-clip size-[20px] top-[663px]" data-name="Query Box Icons">
        <div className="absolute inset-[0.01%_4.23%_0_11.27%]" data-name="recommendation">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9002 19.9982">
            <path d={svgPaths.p16b66d00} fill="var(--fill-0, #0E6FF9)" id="recommendation" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[341px] size-[14px] top-[658px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #EE5E32)" id="Ellipse 11" r="7" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] left-[344px] not-italic text-[12px] text-white top-[656px] whitespace-nowrap">3</p>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] min-w-px not-italic relative text-[#2f2f3b] text-[14px]">Recommendations generated!</p>
    </div>
  );
}

export default function AiSuggestionsV4Micro() {
  return (
    <div className="bg-white overflow-clip relative rounded-[8px] shadow-[-1px_0px_12px_0px_rgba(0,0,0,0.15)] size-full" data-name="AI suggestions V4 - micro">
      <TabBar />
      <CustomInstructions />
      <Lightbulb />
      <div className="absolute bg-[#e7f1fe] content-stretch flex flex-col items-start justify-center left-[105px] overflow-clip p-[12px] rounded-[2px] top-[621px] w-[225px]" data-name="Notification Banner">
        <Container />
      </div>
      <div className="absolute h-[191px] left-[373px] top-[146px] w-[4px]" data-name="Scrollbar">
        <div className="absolute bg-[rgba(24,24,37,0.2)] inset-0 rounded-[6px]" data-name="Scrollbar" />
      </div>
    </div>
  );
}