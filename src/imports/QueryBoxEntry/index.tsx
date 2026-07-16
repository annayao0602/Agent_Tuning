import svgPaths from "./svg-7z1n84tqi9";

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

export default function QueryBoxEntry() {
  return (
    <div className="bg-white drop-shadow-[-1px_2px_6px_rgba(0,0,0,0.13)] relative rounded-[8px] size-full" data-name="Query Box Entry">
      <QueryBox />
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] leading-[14px] left-[190px] not-italic text-[#727679] text-[11px] text-center top-[139px] w-[348px] whitespace-pre-wrap">{`AI can make mistakes.  Consider checking important information for accuracy.`}</p>
    </div>
  );
}