import svgPaths from "./svg-tuoeg5qtxz";

function TextWithCursor() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex items-end left-[9px] top-1/2" data-name="Text with Cursor">
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#181825] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Set #1</p>
      </div>
    </div>
  );
}

export default function DropdownInput() {
  return (
    <div className="bg-[rgba(153,180,208,0.1)] border border-[#0e6ff9] border-solid overflow-clip relative rounded-[6px] size-full" data-name="Dropdown Input">
      <TextWithCursor />
      <div className="-translate-y-1/2 absolute overflow-clip right-[9px] size-[18px] top-1/2" data-name="Arrows">
        <div className="absolute bottom-[38.89%] flex items-center justify-center left-1/4 right-1/4 top-[38.89%]" style={{ containerType: "size" }}>
          <div className="-rotate-90 -scale-x-100 flex-none h-[100cqw] w-[100cqh]">
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