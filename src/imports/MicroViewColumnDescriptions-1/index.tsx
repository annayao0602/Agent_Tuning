import svgPaths from "./svg-sffukunfjz";

function Suggestions() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Suggestions">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Suggestions">
          <path d={svgPaths.p3d89ff00} fill="var(--fill-0, #0E6FF9)" id="Suggestions_2" />
        </g>
      </svg>
    </div>
  );
}

function Suggestions1() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Suggestions">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Suggestions">
          <path d={svgPaths.p1f23d300} fill="var(--fill-0, #181825)" id="Suggestions_2" />
        </g>
      </svg>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute flex h-[6px] items-center justify-center left-[9px] top-[93px] w-[11.318px]">
      <div className="-scale-y-100 flex-none rotate-180">
        <div className="h-[6px] relative w-[11.318px]">
          <div className="absolute inset-[-12.12%_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.3186 6.72747">
              <g id="Group 6">
                <line id="Line 11" stroke="var(--stroke-0, black)" transform="matrix(0.686144 0.727466 -0.686144 0.727466 0 0.727466)" x2="8.24781" y1="-0.5" y2="-0.5" />
                <line id="Line 12" stroke="var(--stroke-0, black)" transform="matrix(-0.686144 0.727466 0.686144 0.727466 11.3186 0.727466)" x2="8.24781" y1="-0.5" y2="-0.5" />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute contents left-[9px] top-[86px]" data-name="text">
      <Group1 />
      <div className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[0] left-[23.92px] not-italic text-[14px] text-black top-[86px] tracking-[0.28px] w-[335.404px] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">Retail Delivery Order Data</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px]">This dataset serves as the primary transaction and fulfillment ledger for our retail delivery operations, capturing essential post-checkout logistics. It tracks unique product identifiers, transaction codes, shipping destinations, and precise carrier drop-off timestamps. An AI chatbot can leverage this structured data to instantly resolve customer support inquiries, verify shipping success, and provide geographic status updates.</p>
      </div>
      <div className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[0] left-[25px] not-italic text-[#2d2d2d] text-[14px] top-[345px] tracking-[0.28px] w-[330.366px] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">Product ID</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">{`Also referred to as "item code" or "SKU." This is the unique alphanumeric string assigned to every item in our catalog. If a user asks "what did I buy?" or "can you look up this item?", cross-reference their query against this field.`}</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] mb-0">Order Number</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px] text-[#7b7b7b]">{`Also known as "invoice number" or "purchase ID." This is the primary key used to track a complete transaction from checkout to delivery. Use this field when a user asks about the status, return eligibility, or contents of a specific purchase.`}</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[10px] items-center px-[4px] relative shrink-0 w-[23px]">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#181825] text-[14px] text-right whitespace-nowrap">
        <p className="leading-[22px]">Custom Instructions</p>
      </div>
    </div>
  );
}

function Line() {
  return <div className="h-0 relative shrink-0 w-[33px]" />;
}

function TabItem() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[34px] items-start relative shrink-0 w-[152px]" data-name="Tab Item">
      <Frame />
      <Line />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="[word-break:break-word] col-1 flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center ml-0 mt-0 not-italic relative row-1 text-[#0e6ff9] text-[14px] w-[147px]">
        <p className="leading-[22px]">Column Descriptions</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-[73px]">
      <Group2 />
    </div>
  );
}

function TabItem1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[34px] items-start relative shrink-0 w-[144px]" data-name="Tab Item">
      <Frame1 />
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

function QueryBoxEntry() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[6px] items-center justify-end left-0 pb-[6px] pt-[12px] px-[16px] top-[834px]" data-name="Query Box Entry">
      <div className="bg-white content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.1)] flex flex-col gap-[8px] h-[90px] items-center px-[12px] py-[10px] relative rounded-[8px] shrink-0" data-name="Query Box">
        <div aria-hidden className="absolute border border-[#e0e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
        <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] min-h-[38px] min-w-full not-italic relative shrink-0 text-[#727679] text-[14px] w-[min-content]">Draft a custom instruction here</p>
        <div className="h-[28px] relative shrink-0 w-[324px]" data-name="Query Box Bottom">
          <div className="absolute left-[304px] size-[20px] top-[4px]" data-name="Query Box Icons">
            <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
              <path d={svgPaths.pcf85f00} fill="var(--fill-0, #A9ADB1)" id="Send" />
            </svg>
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[14px] not-italic relative shrink-0 text-[#727679] text-[11px] text-center w-[348px] whitespace-pre-wrap">{`AI can make mistakes.  Consider checking important information for accuracy.`}</p>
    </div>
  );
}

function Lightbulb() {
  return (
    <div className="absolute contents left-[336px] top-[807px]" data-name="lightbulb">
      <div className="absolute left-[336px] overflow-clip size-[20px] top-[814px]" data-name="Query Box Icons">
        <div className="absolute inset-[0.01%_4.23%_0_11.27%]" data-name="recommendation">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9002 19.9982">
            <path d={svgPaths.p16b66d00} fill="var(--fill-0, #0E6FF9)" id="recommendation" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[347px] size-[14px] top-[809px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #EE5E32)" id="Ellipse 11" r="7" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] left-[350px] not-italic text-[12px] text-white top-[807px] whitespace-nowrap">3</p>
    </div>
  );
}

function Lightbulb1() {
  return (
    <div className="absolute contents left-[330px] top-[699px]" data-name="lightbulb">
      <div className="absolute left-[330px] overflow-clip size-[20px] top-[706px]" data-name="Query Box Icons">
        <div className="absolute inset-[0.01%_4.23%_0_11.27%]" data-name="recommendation">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.9002 19.9982">
            <path d={svgPaths.p16b66d00} fill="var(--fill-0, #0E6FF9)" id="recommendation" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[341px] size-[14px] top-[701px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
          <circle cx="7" cy="7" fill="var(--fill-0, #EE5E32)" id="Ellipse 11" r="7" />
        </svg>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] left-[344px] not-italic text-[12px] text-white top-[699px] whitespace-nowrap">3</p>
    </div>
  );
}

function AiSuggestionsV4Micro() {
  return (
    <div className="absolute bg-white h-[747px] left-[1276px] overflow-clip rounded-[8px] shadow-[-1px_0px_12px_0px_rgba(0,0,0,0.1)] top-[67px] w-[379px]" data-name="AI suggestions V4 - micro">
      <Text />
      <TabBar />
      <div className="absolute inset-[5.53%_10.82%_94.47%_49.08%]">
        <div className="absolute inset-[-3px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152 3">
            <line id="Line 726" stroke="var(--stroke-0, #0E6FF9)" strokeWidth="3" x2="152" y1="1.5" y2="1.5" />
          </svg>
        </div>
      </div>
      <QueryBoxEntry />
      <Lightbulb />
      <div className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[0] left-[28px] not-italic text-[14px] text-[rgba(45,45,45,0.23)] top-[682px] tracking-[0.28px] w-[330.366px] whitespace-pre-wrap">
        <p className="leading-[20px] mb-0">Location (City)</p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="mb-0">
          <span className="leading-[20px]">{`Also known by "place," "destination," or "shipping address." This represents the city and `}</span>
          <span className="leading-[20px] text-[rgba(45,45,45,0.03)]">{`state that the delivery was made to. When a user asks "where is my package?" or "did it `}</span>
          <span className="leading-[20px] text-[rgba(45,45,45,0.35)]">{`arrive at my house?", query this column to provide geographic updates.`}</span>
        </p>
        <p className="leading-[20px] mb-0">​</p>
        <p className="leading-[20px]">Time Delivered</p>
      </div>
      <Lightbulb1 />
    </div>
  );
}

function Minimize() {
  return (
    <div className="absolute contents left-[203px] top-[9px]" data-name="minimize">
      <div className="absolute border border-[#313131] border-solid h-[16px] left-[203px] rounded-[2px] top-[9px] w-[23px]" />
      <div className="absolute border border-[#313131] border-solid h-[16px] left-[208.55px] rounded-[2px] top-[9px] w-[17.448px]" />
    </div>
  );
}

function SidebarRowSubscriptions() {
  return (
    <div className="absolute bg-white h-[38px] left-0 overflow-clip top-[12px] w-[240px]" data-name="Sidebar Row / Subscriptions">
      <div className="absolute bg-white h-[38px] right-0 top-0 w-[10px]" data-name="Right Margin" />
      <Minimize />
    </div>
  );
}

function SidebarRowSubscriptions1() {
  return (
    <div className="absolute bg-white h-[38px] left-0 overflow-clip top-[50px] w-[240px]" data-name="Sidebar Row / Subscriptions">
      <div className="absolute bg-white h-[38px] right-0 top-0 w-[10px]" data-name="Right Margin" />
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] left-[19px] not-italic text-[#2d2d2d] text-[14px] top-[10px] whitespace-nowrap">Questions</p>
    </div>
  );
}

function PF() {
  return (
    <div className="absolute h-[388px] left-[19px] top-[94px] w-[9.582px]" data-name="p/f">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.58228 388">
        <g id="p/f">
          <ellipse cx="5" cy="4.79683" fill="var(--fill-0, #EEB076)" id="Ellipse 1" rx="4.58228" ry="4.79683" />
          <g id="Ellipse 2" />
          <ellipse cx="4.58228" cy="88.8871" fill="var(--fill-0, #EEB076)" id="Ellipse 3" rx="4.58228" ry="4.79683" />
          <g id="Ellipse 4" />
          <g id="Ellipse 5" />
          <g id="Ellipse 6" />
          <g id="Ellipse 7" />
          <ellipse cx="4.58228" cy="299.113" fill="var(--fill-0, #EEB076)" id="Ellipse 8" rx="4.58228" ry="4.79683" />
          <g id="Ellipse 9" />
          <g id="Ellipse 10" />
        </g>
      </svg>
    </div>
  );
}

function Questions() {
  return (
    <div className="absolute contents left-0 top-[50px]" data-name="questions">
      <SidebarRowSubscriptions1 />
      <div className="absolute bg-[#eee] h-[28px] left-0 top-[85px] w-[240px]" />
      <div className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[0] left-[40px] not-italic text-[#2d2d2d] text-[14px] top-[89px] tracking-[-0.154px] w-[200px] whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0">What was the total revenue...</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">How many items are current...</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">How many Shirts did we sel...</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">What is our standard retur...</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">Who is the primary custome...</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">What is the average custom...</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">What is the most expensive...</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">Did Order #108 ship out on...</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5] mb-0">What was the total wholesa...</p>
        <p className="leading-[1.5] mb-0">​</p>
        <p className="leading-[1.5]">What is the active promot...</p>
      </div>
      <PF />
    </div>
  );
}

function Sidebar() {
  return (
    <div className="absolute bg-white h-[976px] left-0 overflow-clip shadow-[1px_0px_2px_0px_rgba(0,0,0,0.1)] top-[46px] w-[240px]" data-name="Sidebar">
      <SidebarRowSubscriptions />
      <Questions />
    </div>
  );
}

function QuestionHeader() {
  return (
    <div className="absolute contents left-[24px] top-[43px]" data-name="question header">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[1.5] left-[25px] not-italic text-[#2d2d2d] text-[16px] top-[44px] tracking-[-0.176px] w-[748px]">1. What was the total revenue generated from Order #105?</p>
    </div>
  );
}

function Help() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-1/2" data-name="Help">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_2_2133)" id="Help">
          <path clipRule="evenodd" d={svgPaths.p3e2e4d80} fill="var(--fill-0, #181825)" fillRule="evenodd" id="Vector" />
          <path d={svgPaths.p389f1700} id="Path" stroke="var(--stroke-0, #181825)" />
        </g>
        <defs>
          <clipPath id="clip0_2_2133">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Progress() {
  return (
    <div className="absolute contents left-[761px] top-[113px]" data-name="progress">
      <div className="absolute flex h-[6px] items-center justify-center left-[761px] top-[113px] w-[182px]">
        <div className="-scale-y-100 flex-none">
          <div className="bg-[#d9d9d9] h-[6px] relative w-[182px]" />
        </div>
      </div>
    </div>
  );
}

function Kpi1() {
  return (
    <div className="absolute contents left-[741px] top-[106px]" data-name="KPI">
      <Progress />
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] left-[949px] not-italic text-[#2d2d2d] text-[12px] top-[106px] whitespace-nowrap">--%</p>
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] left-[741px] not-italic text-[#2d2d2d] text-[12px] top-[106px] whitespace-nowrap">--</p>
    </div>
  );
}

function Kpi() {
  return (
    <div className="absolute contents left-[740px] top-[87px]" data-name="KPI">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[25px] leading-[20px] left-[741px] not-italic text-[12px] text-[rgba(45,45,45,0.7)] top-[88px] tracking-[0.24px] w-[121px]">CONSISTENCY</p>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+350px)] rounded-[30px] size-[14px] top-[calc(50%-370px)]" data-name="Frame">
        <Help />
      </div>
      <Kpi1 />
    </div>
  );
}

function InterpSql() {
  return (
    <div className="absolute contents left-[24px] top-[432px]" data-name="interp & sql">
      <div className="absolute bg-[#f5f5f5] h-[468px] left-[25px] rounded-[8px] top-[433px] w-[466px]" />
      <div className="[word-break:break-word] absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[274px] leading-[0] left-[46.06px] not-italic text-[#7b7b7b] text-[0px] top-[484px] tracking-[-0.132px] w-[431px] whitespace-pre-wrap">
        <p className="italic mb-0 text-[#2d2d2d] text-[14px]">
          <span className="font-['SF_Pro_Text:Regular_Italic',sans-serif] leading-[1.5]">{`Calculate the `}</span>
          <span className="font-['SF_Pro_Text:Semibold_Italic',sans-serif] leading-[1.5]">total sum</span>
          <span className="font-['SF_Pro_Text:Regular_Italic',sans-serif] leading-[1.5]">{` of the item prices associated with `}</span>
          <span className="font-['SF_Pro_Text:Semibold_Italic',sans-serif] leading-[1.5]">Order #105</span>
          <span className="font-['SF_Pro_Text:Regular_Italic',sans-serif] leading-[1.5]">{`. Start by finding values in `}</span>
          <span className="font-['SF_Pro_Text:Semibold_Italic',sans-serif] leading-[1.5]">product id</span>
          <span className="font-['SF_Pro_Text:Regular_Italic',sans-serif] leading-[1.5]">{` listed in Order #105. Pinpoint the products associated with the id and sum up all of the item prices.`}</span>
        </p>
        <p className="leading-[1.5] mb-0 text-[14px]">​</p>
        <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5] text-[#2d2d2d] text-[14px]">Objects Used: Product ID, Product Price, Order ID</p>
      </div>
      <div className="[word-break:break-word] absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[239px] leading-[0] left-[46.06px] not-italic text-[#7b7b7b] text-[0px] top-[659px] tracking-[-0.132px] w-[431px]">
        <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5] mb-0 text-[#2d2d2d] text-[14px] whitespace-pre-wrap">Step 1:</p>
        <ul className="list-disc mb-0">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5] not-italic text-[#2d2d2d] text-[14px]">Query for Order #105</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5] not-italic text-[#2d2d2d] text-[14px]">Search for all products within that order</span>
          </li>
        </ul>
        <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5] mb-0 text-[#2d2d2d] text-[14px] whitespace-pre-wrap">Step 2:</p>
        <ul className="mb-0">
          <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5] not-italic text-[#2d2d2d] text-[14px]">Sum up all the prices associated with the products</span>
          </li>
        </ul>
        <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5] mb-0 text-[#2d2d2d] text-[14px] whitespace-pre-wrap">Step 3:</p>
        <ul className="mb-0">
          <li className="list-disc ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5] not-italic text-[#2d2d2d] text-[14px]">Return the number found in step 2</span>
          </li>
        </ul>
        <p className="leading-[1.5] mb-0 text-[14px] whitespace-pre-wrap">​</p>
        <p className="leading-[1.5] mb-0 text-[14px] whitespace-pre-wrap">​</p>
        <p className="leading-[1.5] text-[12px] whitespace-pre-wrap">​</p>
      </div>
      <div className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] h-[25px] leading-[0] left-[39.94px] not-italic text-[0px] text-black top-[446px] tracking-[-0.176px] w-[328.59px] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[1.5] text-[#7b7b7b] text-[12px]">AGENT INTERPRETATION</span>
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5] text-[#2d2d2d] text-[14px]">
            <br aria-hidden />
            <br aria-hidden />
            <br aria-hidden />
          </span>
        </p>
        <p className="leading-[1.5] text-[16px]">​</p>
      </div>
      <div className="[word-break:break-word] absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[25px] leading-[0] left-[39.94px] not-italic text-[#7b7b7b] text-[12px] top-[630px] tracking-[-0.132px] w-[328.59px]">
        <p className="leading-[1.5] mb-0">EXPLANATION</p>
        <p className="leading-[1.5]">​</p>
      </div>
      <div className="absolute inset-[67.13%_53.56%_30.19%_43.96%]" data-name="SQL view">
        <div className="absolute h-[15px] left-[4px] top-[5px] w-[17px]" data-name="sql">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 15">
            <path d={svgPaths.p2a1f2b00} fill="var(--fill-0, #29313B)" id="sql" />
          </svg>
        </div>
      </div>
      <div className="absolute h-0 left-[33px] top-[621px] w-[450px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 450 1">
            <line id="Line 930" stroke="var(--stroke-0, #D9D9D9)" x2="450" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Cell() {
  return (
    <div className="absolute h-[48px] left-0 overflow-clip top-0 w-[75px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[8px] not-italic right-[17px] text-[#2d2d2d] text-[12px] top-[17px] whitespace-nowrap">Order ID</p>
    </div>
  );
}

function Cell1() {
  return (
    <div className="absolute h-[48px] left-[84px] overflow-clip top-0 w-[77px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[8px] not-italic right-[8px] text-[#2d2d2d] text-[12px] top-[13px]">Product ID</p>
    </div>
  );
}

function Cell2() {
  return (
    <div className="absolute h-[48px] left-[170px] overflow-clip top-0 w-[99px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[8px] not-italic right-[8px] text-[#2d2d2d] text-[12px] top-[13px]">Product Name</p>
    </div>
  );
}

function Cell3() {
  return (
    <div className="absolute h-[48px] left-[278px] overflow-clip top-0 w-[69px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[8px] not-italic right-[20px] text-[#2d2d2d] text-[12px] top-[17px]">Price</p>
    </div>
  );
}

function Cell4() {
  return (
    <div className="absolute h-[48px] left-[356px] overflow-clip top-0 w-[126px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[normal] left-[8px] not-italic right-[43px] text-[#2d2d2d] text-[12px] top-[13px]">Shipping Fee</p>
    </div>
  );
}

function More() {
  return (
    <div className="absolute h-[24px] left-[76px] top-[12px] w-[2px]" data-name="More">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 24">
        <g id="More">
          <path d={svgPaths.pf510d80} fill="var(--fill-0, #7B7B7B)" id="Combined Shape" />
          <circle cx="1" cy="12" fill="var(--fill-0, #7B7B7B)" id="Oval" r="1" transform="rotate(90 1 12)" />
          <circle cx="1" cy="16" fill="var(--fill-0, #7B7B7B)" id="Oval_2" r="1" transform="rotate(90 1 16)" />
        </g>
      </svg>
    </div>
  );
}

function More1() {
  return (
    <div className="absolute h-[24px] left-[162px] top-[12px] w-[2px]" data-name="More">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 24">
        <g id="More">
          <path d={svgPaths.pf510d80} fill="var(--fill-0, #7B7B7B)" id="Combined Shape" />
          <circle cx="1" cy="12" fill="var(--fill-0, #7B7B7B)" id="Oval" r="1" transform="rotate(90 1 12)" />
          <circle cx="1" cy="16" fill="var(--fill-0, #7B7B7B)" id="Oval_2" r="1" transform="rotate(90 1 16)" />
        </g>
      </svg>
    </div>
  );
}

function More2() {
  return (
    <div className="absolute h-[24px] left-[270px] top-[12px] w-[2px]" data-name="More">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 24">
        <g id="More">
          <path d={svgPaths.pf510d80} fill="var(--fill-0, #7B7B7B)" id="Combined Shape" />
          <circle cx="1" cy="12" fill="var(--fill-0, #7B7B7B)" id="Oval" r="1" transform="rotate(90 1 12)" />
          <circle cx="1" cy="16" fill="var(--fill-0, #7B7B7B)" id="Oval_2" r="1" transform="rotate(90 1 16)" />
        </g>
      </svg>
    </div>
  );
}

function More3() {
  return (
    <div className="absolute h-[24px] left-[348px] top-[12px] w-[2px]" data-name="More">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 24">
        <g id="More">
          <path d={svgPaths.pf510d80} fill="var(--fill-0, #7B7B7B)" id="Combined Shape" />
          <circle cx="1" cy="12" fill="var(--fill-0, #7B7B7B)" id="Oval" r="1" transform="rotate(90 1 12)" />
          <circle cx="1" cy="16" fill="var(--fill-0, #7B7B7B)" id="Oval_2" r="1" transform="rotate(90 1 16)" />
        </g>
      </svg>
    </div>
  );
}

function More4() {
  return (
    <div className="absolute h-[24px] left-[440px] top-[12px] w-[2px]" data-name="More">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 24">
        <g id="More">
          <path d={svgPaths.pf510d80} fill="var(--fill-0, #7B7B7B)" id="Combined Shape" />
          <circle cx="1" cy="12" fill="var(--fill-0, #7B7B7B)" id="Oval" r="1" transform="rotate(90 1 12)" />
          <circle cx="1" cy="16" fill="var(--fill-0, #7B7B7B)" id="Oval_2" r="1" transform="rotate(90 1 16)" />
        </g>
      </svg>
    </div>
  );
}

function HeaderRow() {
  return (
    <div className="absolute bg-white h-[48px] left-0 overflow-clip top-0 w-[455px]" data-name="Header Row">
      <Cell />
      <Cell1 />
      <div className="absolute flex h-[29.069px] items-center justify-center left-[170px] top-[9px] w-0">
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[29.069px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.0689 1">
                <line id="Line 936" stroke="var(--stroke-0, #D9D9D9)" x2="29.0689" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Cell2 />
      <Cell3 />
      <div className="absolute flex h-[29.069px] items-center justify-center left-[356px] top-[9px] w-0">
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[29.069px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.0689 1">
                <line id="Line 936" stroke="var(--stroke-0, #D9D9D9)" x2="29.0689" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Cell4 />
      <div className="absolute flex h-[29.069px] items-center justify-center left-[84px] top-[9px] w-0">
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[29.069px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.0689 1">
                <line id="Line 935" stroke="var(--stroke-0, #D9D9D9)" x2="29.0689" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex h-[29.069px] items-center justify-center left-[278px] top-[9px] w-0">
        <div className="-rotate-90 flex-none">
          <div className="h-0 relative w-[29.069px]">
            <div className="absolute inset-[-1px_0_0_0]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 29.0689 1">
                <line id="Line 936" stroke="var(--stroke-0, #D9D9D9)" x2="29.0689" y1="0.5" y2="0.5" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <More />
      <More1 />
      <More2 />
      <More3 />
      <More4 />
    </div>
  );
}

function Cell5() {
  return (
    <div className="absolute h-[48px] left-0 overflow-clip top-0 w-[75px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[14px] whitespace-nowrap">159</p>
    </div>
  );
}

function Cell6() {
  return (
    <div className="absolute h-[48px] left-[84px] overflow-clip top-0 w-[95px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[14px] w-[61px]">159</p>
    </div>
  );
}

function Cell7() {
  return (
    <div className="absolute h-[48px] left-[169px] overflow-clip top-0 w-[109px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[14px] w-[83px]">Boots</p>
    </div>
  );
}

function Cell8() {
  return (
    <div className="absolute h-[48px] left-[283px] overflow-clip top-0 w-[69px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[4px] not-italic text-[#1a1a1a] text-[12px] top-[14px] w-[41px]">$50.00</p>
    </div>
  );
}

function Cell9() {
  return (
    <div className="absolute h-[48px] left-[357px] overflow-clip top-0 w-[98px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[14px] w-[75px]">$5.00</p>
    </div>
  );
}

function DataRow() {
  return (
    <div className="absolute bg-[#f3f3f3] h-[35px] left-0 overflow-clip top-[48px] w-[455px]" data-name="Data Row 1">
      <Cell5 />
      <Cell6 />
      <Cell7 />
      <Cell8 />
      <Cell9 />
    </div>
  );
}

function Cell10() {
  return (
    <div className="absolute h-[48px] left-0 overflow-clip top-0 w-[75px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">160</p>
    </div>
  );
}

function Cell11() {
  return (
    <div className="absolute h-[48px] left-[84px] overflow-clip top-0 w-[95px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">204</p>
    </div>
  );
}

function Cell12() {
  return (
    <div className="absolute h-[48px] left-[169px] overflow-clip top-0 w-[109px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">Jacket</p>
    </div>
  );
}

function Cell13() {
  return (
    <div className="absolute h-[48px] left-[278px] overflow-clip top-0 w-[69px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">$120.00</p>
    </div>
  );
}

function Cell14() {
  return (
    <div className="absolute h-[48px] left-[357px] overflow-clip top-0 w-[98px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">$8.00</p>
    </div>
  );
}

function DataRow1() {
  return (
    <div className="absolute bg-white h-[35px] left-0 overflow-clip top-[83px] w-[455px]" data-name="Data Row 2">
      <Cell10 />
      <Cell11 />
      <Cell12 />
      <Cell13 />
      <Cell14 />
    </div>
  );
}

function Cell15() {
  return (
    <div className="absolute h-[48px] left-0 overflow-clip top-0 w-[75px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">161</p>
    </div>
  );
}

function Cell16() {
  return (
    <div className="absolute h-[48px] left-[84px] overflow-clip top-0 w-[95px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">317</p>
    </div>
  );
}

function Cell17() {
  return (
    <div className="absolute h-[48px] left-[169px] overflow-clip top-0 w-[109px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">Scarf</p>
    </div>
  );
}

function Cell18() {
  return (
    <div className="absolute h-[48px] left-[278px] overflow-clip top-0 w-[69px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">$25.00</p>
    </div>
  );
}

function Cell19() {
  return (
    <div className="absolute h-[48px] left-[357px] overflow-clip top-0 w-[98px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">$3.50</p>
    </div>
  );
}

function DataRow2() {
  return (
    <div className="absolute bg-[#f3f3f3] h-[35px] left-0 overflow-clip top-[118px] w-[455px]" data-name="Data Row 3">
      <Cell15 />
      <Cell16 />
      <Cell17 />
      <Cell18 />
      <Cell19 />
    </div>
  );
}

function Cell20() {
  return (
    <div className="absolute h-[48px] left-0 overflow-clip top-0 w-[75px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">162</p>
    </div>
  );
}

function Cell21() {
  return (
    <div className="absolute h-[48px] left-[84px] overflow-clip top-0 w-[95px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">482</p>
    </div>
  );
}

function Cell22() {
  return (
    <div className="absolute h-[48px] left-[169px] overflow-clip top-0 w-[109px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">Gloves</p>
    </div>
  );
}

function Cell23() {
  return (
    <div className="absolute h-[48px] left-[278px] overflow-clip top-0 w-[69px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">$35.00</p>
    </div>
  );
}

function Cell24() {
  return (
    <div className="absolute h-[48px] left-[357px] overflow-clip top-0 w-[98px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">$4.00</p>
    </div>
  );
}

function DataRow3() {
  return (
    <div className="absolute bg-white h-[35px] left-0 overflow-clip top-[153px] w-[455px]" data-name="Data Row 4">
      <Cell20 />
      <Cell21 />
      <Cell22 />
      <Cell23 />
      <Cell24 />
    </div>
  );
}

function Cell25() {
  return (
    <div className="absolute h-[48px] left-0 overflow-clip top-0 w-[75px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">163</p>
    </div>
  );
}

function Cell26() {
  return (
    <div className="absolute h-[48px] left-[84px] overflow-clip top-0 w-[95px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">561</p>
    </div>
  );
}

function Cell27() {
  return (
    <div className="absolute h-[48px] left-[169px] overflow-clip top-0 w-[109px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">Hat</p>
    </div>
  );
}

function Cell28() {
  return (
    <div className="absolute h-[48px] left-[278px] overflow-clip top-0 w-[69px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">$18.00</p>
    </div>
  );
}

function Cell29() {
  return (
    <div className="absolute h-[48px] left-[357px] overflow-clip top-0 w-[98px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">$3.00</p>
    </div>
  );
}

function DataRow4() {
  return (
    <div className="absolute bg-[#f3f3f3] h-[35px] left-0 overflow-clip top-[188px] w-[455px]" data-name="Data Row 5">
      <Cell25 />
      <Cell26 />
      <Cell27 />
      <Cell28 />
      <Cell29 />
    </div>
  );
}

function DataRow5() {
  return <div className="absolute bg-white h-[25px] left-0 top-[223px] w-[455px]" data-name="Data Row 6" />;
}

function Cell30() {
  return (
    <div className="absolute h-[48px] left-0 overflow-clip top-0 w-[75px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">163</p>
    </div>
  );
}

function Cell31() {
  return (
    <div className="absolute h-[48px] left-[84px] overflow-clip top-0 w-[95px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">563</p>
    </div>
  );
}

function Cell32() {
  return (
    <div className="absolute h-[48px] left-[169px] overflow-clip top-0 w-[109px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">Cap</p>
    </div>
  );
}

function Cell33() {
  return (
    <div className="absolute h-[48px] left-[278px] overflow-clip top-0 w-[69px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">$19.00</p>
    </div>
  );
}

function Cell34() {
  return (
    <div className="absolute h-[48px] left-[357px] overflow-clip top-0 w-[98px]" data-name="Cell">
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[8px] not-italic text-[#1a1a1a] text-[12px] top-[10px] whitespace-nowrap">$4.00</p>
    </div>
  );
}

function DataRow6() {
  return (
    <div className="absolute bg-white h-[35px] left-0 overflow-clip top-[223px] w-[455px]" data-name="Data Row 5">
      <Cell30 />
      <Cell31 />
      <Cell32 />
      <Cell33 />
      <Cell34 />
      <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[4px] left-[calc(50%-145.5px)] top-[calc(50%+4.5px)] w-[100px]" data-name="Scrollbar">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[rgba(24,24,37,0.2)] h-[4px] left-1/2 rounded-[6px] top-1/2 w-[100px]" data-name="Scrollbar" />
      </div>
    </div>
  );
}

function ProductTable() {
  return (
    <div className="absolute bg-white h-[248px] left-[15px] rounded-[3px] top-[230px] w-[449px]" data-name="Product Table">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <HeaderRow />
        <DataRow />
        <DataRow1 />
        <DataRow2 />
        <DataRow3 />
        <DataRow4 />
        <DataRow5 />
        <DataRow6 />
        <div className="absolute h-[63px] left-[441px] top-[53px] w-[4px]" data-name="Scrollbar">
          <div className="absolute bg-[rgba(24,24,37,0.2)] inset-0 rounded-[6px]" data-name="Scrollbar" />
        </div>
      </div>
      <div aria-hidden className="absolute border border-[#d9d9d9] border-solid inset-[-1px] pointer-events-none rounded-[4px]" />
    </div>
  );
}

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-[#f7faff] h-[468px] left-0 rounded-[8px] top-0 w-[476px]" />
      <div className="[word-break:break-word] absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[147px] leading-[0] left-[15px] not-italic text-[#7b7b7b] text-[0px] top-[30px] tracking-[-0.132px] w-[438px] whitespace-pre-wrap">
        <p className="leading-[1.5] mb-0 text-[14px]">​</p>
        <p className="mb-0 text-[#2d2d2d] text-[14px]">
          <span className="font-['SF_Pro_Text:Medium',sans-serif] leading-[1.5]">{`The total revenue is `}</span>
          <span className="font-['SF_Pro_Text:Bold',sans-serif] leading-[1.5]">$55.00.</span>
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5]">{` This `}</span>
          <span className="font-['SF_Pro_Text:Medium',sans-serif] leading-[1.5]">{`can be found by querying `}</span>
          <span className="font-['SF_Pro_Text:Bold',sans-serif] leading-[1.5]">Order ID</span>
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5]">{` by 105 and summing all `}</span>
          <span className="font-['SF_Pro_Text:Bold',sans-serif] leading-[1.5]">Prices</span>
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5]">{` and `}</span>
          <span className="font-['SF_Pro_Text:Bold',sans-serif] leading-[1.5]">Shipping</span>
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5]">{` `}</span>
          <span className="font-['SF_Pro_Text:Bold',sans-serif] leading-[1.5]">fee</span>
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5]">{`. The revenue can also just be the `}</span>
          <span className="font-['SF_Pro_Text:Bold',sans-serif] leading-[1.5]">price</span>
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5]">{`, but it must be clarified that it is not including the `}</span>
          <span className="font-['SF_Pro_Text:Bold',sans-serif] leading-[1.5]">shipping fee</span>
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5]">{` in the calculation.`}</span>
        </p>
        <p className="leading-[1.5] mb-0 text-[14px]">​</p>
        <p className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5] text-[#2d2d2d] text-[14px]">Objects Used: Product ID, Product Price, Order ID, Shipping Fee</p>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[25px] leading-[1.5] left-[15px] not-italic text-[#7b7b7b] text-[12px] top-[13px] tracking-[-0.132px] w-[330px]">EXPECTED ANSWER</p>
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Semibold',sans-serif] h-[25px] leading-[1.5] left-[19px] not-italic text-[#7b7b7b] text-[12px] top-[200px] tracking-[-0.132px] w-[344px]">DATA TABLE</p>
      <ProductTable />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[468px] left-[508px] overflow-clip rounded-[8px] top-[432px] w-[476px]">
      <Group />
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[normal] left-[338px] not-italic text-[#7b7b7b] text-[11px] top-[212px] whitespace-nowrap">23 rows x 10 columns</p>
      <div className="absolute h-0 left-[8px] top-[188px] w-[450px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 450 1">
            <line id="Line 930" stroke="var(--stroke-0, #D9D9D9)" x2="450" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="absolute left-[447px] size-[15px] top-[13px]" data-name="Edit">
        <div className="absolute inset-[2.77%_2.75%_0_0]" data-name="edit">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.5869 14.5847">
            <path clipRule="evenodd" d={svgPaths.p36f6c380} fill="var(--fill-0, #5D5D66)" fillRule="evenodd" id="edit" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function PrefixLabel() {
  return (
    <div className="absolute content-stretch flex gap-[6px] items-center justify-center left-[5px] top-[4px]" data-name="Prefix & Label">
      <p className="[word-break:break-word] font-['Roboto:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#925a25] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        Flagged
      </p>
    </div>
  );
}

function Button() {
  return (
    <div className="h-[32px] max-h-[32px] min-h-[32px] min-w-[60px] relative rounded-[4px] shrink-0 w-[60px]" data-name=".Button">
      <div className="absolute bg-[rgba(238,176,118,0.48)] inset-[0_0_28.13%_0] rounded-bl-[4px] rounded-tl-[4px]" data-name="Background" />
      <PrefixLabel />
    </div>
  );
}

function CommonArrowDown() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute left-1/2 size-[18px] top-[calc(50%+0.5px)]" data-name="Common/Arrow down">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Common/Arrow down">
          <path d="M12 8.15298L9 10.9L6 8.15002" id="Line" stroke="var(--stroke-0, #925A25)" strokeLinecap="square" />
        </g>
      </svg>
    </div>
  );
}

function MinWidth58Px() {
  return (
    <div className="absolute flex h-0 items-center justify-center left-[-43px] top-[23px] w-[58px]">
      <div className="-scale-y-100 flex-none">
        <div className="h-0 relative w-[58px]" data-name="Min Width 58px" />
      </div>
    </div>
  );
}

function ButtonDismissal() {
  return (
    <div className="bg-[rgba(238,176,118,0.48)] h-[23px] relative rounded-br-[4px] rounded-tr-[4px] shrink-0 w-[24px]" data-name="Button - dismissal">
      <CommonArrowDown />
      <MinWidth58Px />
    </div>
  );
}

function SplitButton() {
  return (
    <div className="absolute content-stretch flex gap-px h-[28px] items-start left-[127px] top-[15px]" data-name="Split Button">
      <Button />
      <ButtonDismissal />
    </div>
  );
}

function CachingManager() {
  return (
    <div className="absolute left-0 size-[25px] top-0" data-name="Caching Manager">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 25">
        <g id="Caching Manager">
          <path d={svgPaths.p358a7780} fill="var(--fill-0, #29313B)" fillOpacity="0.68" id="Cache manager" />
        </g>
      </svg>
    </div>
  );
}

function MinWidth60Px() {
  return <div className="h-[0.001px] relative shrink-0 w-[36px]" data-name="Min Width 60px" />;
}

function Button1() {
  return (
    <div className="-translate-y-1/2 absolute bg-[rgba(242,243,245,0.83)] content-stretch flex gap-[4px] h-[23px] items-center pl-[5px] py-[8px] right-[594px] rounded-[4px] top-[calc(50%-117px)] w-[138px]" data-name="Button">
      <div className="relative shrink-0 size-[25px]" data-name="Caching Manager">
        <CachingManager />
      </div>
      <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-[rgba(6,97,224,0.8)] whitespace-nowrap">Cache Answer</p>
      <MinWidth60Px />
    </div>
  );
}

function AgentAnswer() {
  return (
    <div className="absolute h-[287px] left-[24px] overflow-clip rounded-[8px] top-[134px] w-[960px]" data-name="agent answer">
      <div className="absolute h-[286px] left-0 top-0 w-[961px]">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 961 286">
          <path d={svgPaths.pa94300} fill="var(--fill-0, #FFF5EC)" id="Rectangle 346253349" />
        </svg>
      </div>
      <div className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] h-[196px] leading-[0] left-[15px] not-italic text-[0px] text-black top-[37px] tracking-[-0.176px] w-[918px]">
        <p className="leading-[1.5] mb-0 text-[12px] whitespace-pre-wrap">​</p>
        <p className="mb-0 text-[#2d2d2d] text-[14px] whitespace-pre-wrap">
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5]">{`The total revenue generated from Order #105 was `}</span>
          <span className="font-['SF_Pro_Text:Bold',sans-serif] leading-[1.5]">$50.00</span>
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5]">{` on a pair of `}</span>
          <span className="font-['SF_Pro_Text:Bold',sans-serif] leading-[1.5]">{`boots. `}</span>
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5]">This took place on June 21st, 2026 and the order successfully shipped. Here are a few key insights about this one order:</span>
        </p>
        <p className="leading-[1.5] mb-0 text-[14px] whitespace-pre-wrap">​</p>
        <ul className="leading-[1.5] list-disc mb-0 text-[#2d2d2d] text-[14px]">
          <li className="mb-0 ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['SF_Pro_Text:Regular',sans-serif]">{`this item has been sold in `}</span>
            <span className="font-['SF_Pro_Text:Bold',sans-serif]">25</span>
            <span className="font-['SF_Pro_Text:Regular',sans-serif]">{` different orders - it must be popular!`}</span>
          </li>
          <li className="ms-[calc(var(--list-marker-font-size,0)*1.5*1)]">
            <span className="font-['SF_Pro_Text:Regular',sans-serif]">{`Orders typically holding `}</span>
            <span className="font-['SF_Pro_Text:Bold',sans-serif]">boots</span>
            <span className="font-['SF_Pro_Text:Regular',sans-serif]">{` will also hold `}</span>
            <span className="font-['SF_Pro_Text:Bold',sans-serif]">gloves</span>
          </li>
        </ul>
        <p className="leading-[1.5] mb-0 text-[14px] whitespace-pre-wrap">​</p>
        <p className="leading-[1.5] mb-0 text-[#2d2d2d] text-[14px] whitespace-pre-wrap">Overall, this order brings in less revenue than the average order.</p>
        <p className="leading-[1.5] mb-0 text-[14px] whitespace-pre-wrap">​</p>
        <p className="font-['SF_Pro_Text:Medium',sans-serif] leading-[1.5] mb-0 text-[#7b7b7b] text-[12px] whitespace-pre-wrap">
          <br aria-hidden />
          <br aria-hidden />
        </p>
        <p className="leading-[1.5] text-[16px] whitespace-pre-wrap">​</p>
      </div>
      <div className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] h-[25px] leading-[0] left-[15px] not-italic text-[0px] text-black top-[16px] tracking-[-0.176px] w-[188px] whitespace-pre-wrap">
        <p className="mb-0">
          <span className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[1.5] text-[#7b7b7b] text-[12px]">AGENT ANSWER</span>
          <span className="font-['SF_Pro_Text:Regular',sans-serif] leading-[1.5] text-[#2d2d2d] text-[14px]">
            <br aria-hidden />
            <br aria-hidden />
            <br aria-hidden />
          </span>
        </p>
        <p className="leading-[1.5] text-[16px]">​</p>
      </div>
      <SplitButton />
      <Button1 />
    </div>
  );
}

function Interpretation() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white border border-[#eeb076] border-solid h-[934px] left-[calc(50%-70.5px)] overflow-clip rounded-[8px] shadow-[0px_2px_15px_0px_rgba(0,0,0,0.21)] top-[calc(50%+24px)] w-[1010px]" data-name="Interpretation">
      <QuestionHeader />
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] left-[9px] not-italic text-[#0d64e0] text-[12px] top-[9px] w-[143px]">{`< Back to Overview`}</p>
      <div className="absolute h-0 left-[24px] top-[78px] w-[960px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 960 1">
            <line id="Line 930" stroke="var(--stroke-0, #D9D9D9)" x2="960" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <div className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[0] left-[24px] not-italic text-[12px] text-[rgba(45,45,45,0.69)] top-[87px] w-[143px]">
        <p className="font-['SF_Pro_Text:Semibold',sans-serif] leading-[18px] mb-0">LAST RUN</p>
        <p className="leading-[18px]">Just now</p>
      </div>
      <Kpi />
      <InterpSql />
      <Frame3 />
      <div className="absolute bg-[#6ea9fb] content-stretch flex gap-[10px] h-[25px] items-center justify-center left-[872px] min-w-[60px] overflow-clip px-[16px] py-[8px] rounded-[6px] top-[42px] w-[112px]" data-name="Button">
        <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Run Query</p>
        <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Arrow">
          <div className="absolute bottom-[38.89%] flex items-center justify-center left-1/4 right-1/4 top-[38.89%]" style={{ containerType: "size" }}>
            <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
              <div className="relative size-full">
                <div className="absolute inset-[-5.56%_-12.5%]">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00001 10">
                    <path d={svgPaths.p1f3e7d80} id="Line 713" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AgentAnswer />
    </div>
  );
}

function Colose() {
  return (
    <div className="absolute left-[2px] size-[14px] top-[2px]" data-name="Colose">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
        <g clipPath="url(#clip0_1_2469)" id="Colose">
          <path d={svgPaths.p46e500} fill="var(--fill-0, #181825)" id="close" />
        </g>
        <defs>
          <clipPath id="clip0_1_2469">
            <rect fill="white" height="14" width="14" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Save() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Save">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g id="Save">
          <path d={svgPaths.p5c93b70} id="Rectangle 34625315" stroke="var(--stroke-0, #181825)" />
          <path d={svgPaths.p2a1d9a00} fill="var(--fill-0, #181825)" id="Subtract" />
        </g>
      </svg>
    </div>
  );
}

function Icon() {
  return (
    <div className="content-stretch flex items-center px-[5px] py-[4px] relative rounded-bl-[6px] rounded-tl-[6px] shrink-0" data-name="Icon2">
      <div className="relative shrink-0 size-[18px]" data-name="Save">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex items-center justify-center p-[10px] relative size-full">
            <Save />
          </div>
        </div>
      </div>
    </div>
  );
}

function Arrow() {
  return (
    <div className="h-[26px] relative rounded-br-[6px] rounded-tr-[6px] shrink-0 w-[12px]" data-name="Arrow">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Arrows">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[2px] items-center justify-center left-1/2 top-1/2 w-[5px]">
              <div className="-rotate-90 flex-none">
                <div className="h-[5px] relative w-[2px]">
                  <div className="absolute inset-[-10%_-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.00002 6.00004">
                      <path d={svgPaths.p1e75c740} id="Line 713" stroke="var(--stroke-0, #181825)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-[rgba(153,180,208,0.1)] h-[26px] relative rounded-br-[6px] rounded-tr-[6px] shrink-0 w-[12px]">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="Arrows">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[2px] items-center justify-center left-1/2 top-1/2 w-[5px]">
              <div className="-rotate-90 flex-none">
                <div className="h-[5px] relative w-[2px]">
                  <div className="absolute inset-[-10%_-25%]">
                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3.00002 6.00004">
                      <path d={svgPaths.p1e75c740} id="Line 713" stroke="var(--stroke-0, #181825)" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function UndoAndArrow() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Undo and Arrow">
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Undo and Redo">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[13.333px] left-1/2 top-1/2 w-[16px]" data-name="undo_fill">
          <div className="absolute inset-[-3.76%_-3.12%_-3.75%_-3.13%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 14.3351">
              <path clipRule="evenodd" d={svgPaths.p2b862c00} fillRule="evenodd" id="undo_fill" stroke="var(--stroke-0, #181825)" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
      <Frame2 />
    </div>
  );
}

function UndoAndRedo() {
  return (
    <div className="absolute content-stretch flex gap-[12px] items-center left-[1255px] top-[8.5px]" data-name="Undo and Redo">
      <UndoAndArrow />
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none rotate-180">
          <div className="relative size-[18px]" data-name="Undo and Redo">
            <div className="-translate-x-1/2 -translate-y-1/2 absolute h-[13.333px] left-1/2 top-[calc(50%-0.33px)] w-[16px]" data-name="undo_fill">
              <div className="absolute inset-[-3.76%_-3.12%_-3.75%_-3.13%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 14.3351">
                  <path clipRule="evenodd" d={svgPaths.p2b862c00} fillRule="evenodd" id="undo_fill" stroke="var(--stroke-0, #181825)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RIghtSideIcons() {
  return (
    <div className="absolute contents left-[1255px] top-[8.5px]" data-name="RIght side icons">
      <div className="absolute bg-[#8b8b92] content-stretch flex gap-[10px] h-[26px] items-center justify-center left-[1523px] max-h-[26px] min-h-[26px] min-w-[60px] overflow-clip px-[12px] py-[4px] rounded-[6px] top-[9.5px]" data-name="Button">
        <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Publish</p>
      </div>
      <div className="-translate-x-1/2 -translate-y-1/2 absolute left-[calc(50%+804.5px)] overflow-clip size-[18px] top-[calc(50%-3.5px)]" data-name="Close">
        <Colose />
      </div>
      <div className="absolute content-stretch flex gap-px h-[26px] items-center justify-center left-[1472px] py-[10px] top-[9.5px]" data-name="Save">
        <Icon />
        <Arrow />
      </div>
      <UndoAndRedo />
      <div className="absolute bottom-[8.5px] left-[1427px] size-[27px]" data-name="Reset">
        <div className="absolute inset-[20%_20.06%_20%_20%]" data-name="Reset">
          <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.1846 16.2002">
            <path d={svgPaths.p3660d700} fill="var(--fill-0, #29313B)" id="Reset" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function EditingModeToolbarIndicator() {
  return <div className="absolute right-[713px] size-[11px] top-[20px]" data-name="Editing Mode - Toolbar Indicator" />;
}

function TextWithCursor() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Text with Cursor">
      <div className="h-[17px] relative shrink-0 w-[0.001px]" data-name="Height Spacer" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#181825] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Baseline Agent</p>
      </div>
    </div>
  );
}

function DropdownInput() {
  return (
    <div className="absolute bg-[rgba(153,180,208,0.1)] content-stretch flex h-[26px] items-center justify-between left-[32px] overflow-clip px-[10px] py-[11px] rounded-[6px] top-[10px] w-[134px]" data-name="Dropdown Input">
      <TextWithCursor />
      <div className="overflow-clip relative shrink-0 size-[18px]" data-name="Arrows">
        <div className="absolute bottom-[38.89%] flex items-center justify-center left-1/4 right-1/4 top-[38.89%]" style={{ containerType: "size" }}>
          <div className="-rotate-90 flex-none h-[100cqw] w-[100cqh]">
            <div className="relative size-full">
              <div className="absolute inset-[-5.56%_-12.5%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.00001 10">
                  <path d={svgPaths.p1f3e7d80} id="Line 713" stroke="var(--stroke-0, #181825)" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WebLibraryHomeToolbar() {
  return (
    <div className="absolute bg-white h-[46px] left-0 overflow-clip shadow-[0px_2px_4px_0px_rgba(0,0,0,0.14)] top-0 w-[1663px]" data-name="Web/Library Home Toolbar">
      <div className="-translate-x-1/2 -translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['SF_Pro_Text:Regular',sans-serif] justify-center leading-[0] left-[863.5px] not-italic text-[#29313b] text-[18px] text-center top-[26px] whitespace-nowrap">
        <p className="leading-[20px]">Baseline Agent</p>
      </div>
      <RIghtSideIcons />
      <EditingModeToolbarIndicator />
      <DropdownInput />
      <div className="absolute bg-[#0e6ff9] content-stretch flex h-[15px] items-center justify-center left-[745px] px-[8px] py-[2px] rounded-[4px] top-[18px] w-[50px]" data-name="Specific Capsule">
        <div className="[word-break:break-word] flex flex-col font-['Inter:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-white uppercase whitespace-nowrap">
          <p className="leading-[16px]">ACTIVE</p>
        </div>
      </div>
      <div className="absolute bg-[#6ea9fb] content-stretch flex gap-[10px] h-[26px] items-center justify-center left-[1341px] max-h-[26px] min-h-[26px] min-w-[60px] overflow-clip px-[12px] py-[4px] rounded-[6px] top-[9px]" data-name="Button">
        <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Run All</p>
      </div>
    </div>
  );
}

function QueryBoxBottom() {
  return (
    <div className="h-[28px] relative shrink-0 w-[324px]" data-name="Query Box Bottom">
      <div className="absolute left-[301px] size-[20px] top-[4px]" data-name="Query Box Icons">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <g clipPath="url(#clip0_2_2071)" id="Bulb">
            <path d={svgPaths.p2a590d70} fill="var(--fill-0, #A9ADB1)" id="Magic" />
          </g>
          <defs>
            <clipPath id="clip0_2_2071">
              <rect fill="white" height="20" width="20" />
            </clipPath>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function QueryBox() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_1px_2px_rgba(0,0,0,0.1)] flex flex-col gap-[8px] h-[112px] items-center left-[16px] px-[12px] py-[10px] rounded-[8px] top-[19px]" data-name="Query Box">
      <div aria-hidden className="absolute border border-[#e0e4e7] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[18px] min-h-[38px] min-w-full not-italic relative shrink-0 text-[#727679] text-[14px] w-[min-content]">Describe an issue you’re seeing... (ex. “Make the agent stop ignoring shipping fees for revenue questions”)</p>
      <QueryBoxBottom />
    </div>
  );
}

function QueryBoxEntry1() {
  return (
    <div className="absolute bg-white drop-shadow-[-1px_2px_6px_rgba(0,0,0,0.13)] h-[179px] left-[1276px] rounded-[8px] top-[825px] w-[380px]" data-name="Query Box Entry">
      <QueryBox />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[14px] left-[190px] not-italic text-[#727679] text-[11px] text-center top-[139px] w-[348px] whitespace-pre-wrap">{`AI can make mistakes.  Consider checking important information for accuracy.`}</p>
    </div>
  );
}

export default function MicroViewColumnDescriptions() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="Micro View Column Descriptions">
      <div className="absolute h-[17.955px] left-[1178px] top-[458px] w-[17.216px]" data-name="Free-form SQL">
        <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17.2148 17.9556">
          <path d={svgPaths.p31f76f00} fill="var(--fill-0, #F7FAFF)" id="Free-form SQL" />
        </svg>
      </div>
      <div className="absolute bg-white border border-[#6ea9fb] border-solid left-[1611px] overflow-clip rounded-[20px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] size-[34px] top-[848px]" data-name="Suggestion">
        <Suggestions />
      </div>
      <div className="absolute bg-white border border-[#e7e9eb] border-solid left-[1611px] overflow-clip rounded-[20px] shadow-[0px_1px_4px_0px_rgba(0,0,0,0.05)] size-[34px] top-[848px]" data-name="Suggestion">
        <Suggestions1 />
      </div>
      <AiSuggestionsV4Micro />
      <Sidebar />
      <Interpretation />
      <WebLibraryHomeToolbar />
      <QueryBoxEntry1 />
    </div>
  );
}