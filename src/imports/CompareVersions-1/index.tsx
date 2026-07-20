import svgPaths from "./svg-fbpv71l3k0";

function EditingModeToolbarIndicator() {
  return (
    <div className="absolute right-[629px] size-[11px] top-[-46px]" data-name="Editing Mode - Toolbar Indicator">
      <svg className="absolute block inset-0 size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
        <g id="Editing Mode - Toolbar Indicator" />
      </svg>
    </div>
  );
}

function TextWithCursor() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Text with Cursor">
      <div className="h-[17px] relative shrink-0 w-[0.001px]" data-name="Height Spacer" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#181825] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">Select File</p>
      </div>
    </div>
  );
}

function TextWithCursor1() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Text with Cursor">
      <div className="h-[17px] relative shrink-0 w-[0.001px]" data-name="Height Spacer" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#181825] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">--</p>
      </div>
    </div>
  );
}

function TextWithCursor2() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Text with Cursor">
      <div className="h-[17px] relative shrink-0 w-[0.001px]" data-name="Height Spacer" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#181825] text-[14px] whitespace-nowrap">
        <p className="leading-[18px]">--</p>
      </div>
    </div>
  );
}

function ListItems() {
  return (
    <div className="h-[34px] relative shrink-0 w-[210px]" data-name="List items">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#181825] text-[14px] top-[calc(50%-9px)] whitespace-nowrap">​</p>
    </div>
  );
}

function AutoModelingMenu() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_3px_5px_rgba(24,24,37,0.2)] flex flex-col h-[67px] items-start left-[223px] px-[4px] py-[10px] rounded-[8px] top-[232px] w-[224px]" data-name="Auto Modeling Menu">
      <ListItems />
    </div>
  );
}

function RunQueryDropdown() {
  return (
    <div className="absolute contents left-[223px] top-[232px]" data-name="run query dropdown">
      <AutoModelingMenu />
      <div className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] h-[49px] leading-[0] left-[244px] not-italic text-[#181825] text-[14px] top-[calc(50%-200.5px)] w-[207px]">
        <p className="leading-[28px] mb-0">Baseline Agent</p>
        <p className="leading-[28px]">Version 2</p>
      </div>
    </div>
  );
}

function VersionSelection1() {
  return (
    <div className="absolute contents left-[223px] top-[198px]" data-name="version selection">
      <div className="absolute bg-[rgba(153,180,208,0.1)] content-stretch flex h-[34px] items-center justify-between left-[223px] overflow-clip px-[10px] py-[11px] rounded-[6px] top-[198px] w-[223.843px]" data-name="Dropdown Input">
        <TextWithCursor1 />
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
      <div className="absolute bg-[rgba(153,180,208,0.1)] content-stretch flex h-[34px] items-center justify-between left-[552.24px] overflow-clip px-[10px] py-[11px] rounded-[6px] top-[198px] w-[222.756px]" data-name="Dropdown Input">
        <TextWithCursor2 />
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
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[19.966px] justify-center leading-[0] left-[485.96px] not-italic text-[#2d2d2d] text-[14px] top-[214.98px] w-[46.029px]">
        <p className="leading-[18px]">vs.</p>
      </div>
      <RunQueryDropdown />
    </div>
  );
}

function ListItems1() {
  return (
    <div className="h-[34px] relative shrink-0 w-[210px]" data-name="List items">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#181825] text-[14px] top-[calc(50%-9px)] whitespace-nowrap">​</p>
    </div>
  );
}

function AutoModelingMenu1() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_3px_5px_rgba(24,24,37,0.2)] flex flex-col h-[34px] items-start left-[223px] px-[4px] py-[10px] rounded-[8px] top-[164px] w-[224px]" data-name="Auto Modeling Menu">
      <ListItems1 />
    </div>
  );
}

function RunQueryDropdown1() {
  return (
    <div className="absolute contents left-[223px] top-[164px]" data-name="run query dropdown">
      <AutoModelingMenu1 />
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] h-[4px] leading-[20px] left-[244px] not-italic text-[#181825] text-[14px] top-[calc(50%-270.5px)] w-[207px]">Set #1</p>
    </div>
  );
}

function VersionSelection() {
  return (
    <div className="absolute contents left-[28px] top-[78px]" data-name="Version selection">
      <div className="absolute bg-[rgba(247,250,255,0.76)] h-[204px] left-[28px] rounded-[8px] top-[78px] w-[1196px]" />
      <div className="absolute bg-[rgba(153,180,208,0.1)] content-stretch flex h-[35px] items-center justify-between left-[223px] overflow-clip px-[10px] py-[11px] rounded-[6px] top-[126px] w-[224px]" data-name="Dropdown Input">
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
      <VersionSelection1 />
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[18px] left-[37.22px] not-italic text-[#464646] text-[12px] top-[86px] tracking-[0.24px] w-[141.429px]">VERSION SELECTION</p>
      <div className="absolute bg-[#6ea9fb] content-stretch flex gap-[10px] h-[26px] items-center justify-center left-[1075px] max-h-[26px] min-h-[26px] min-w-[60px] overflow-clip px-[12px] py-[4px] rounded-[6px] top-[95px]" data-name="Button">
        <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Run Comparison</p>
      </div>
      <div className="-translate-y-1/2 [word-break:break-word] absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[45px] not-italic text-[14px] text-black top-[180px] whitespace-nowrap">
        <p className="leading-[18px] mb-0 whitespace-pre">Choose Question Set:</p>
        <p className="leading-[18px] mb-0 whitespace-pre">​</p>
        <p className="leading-[18px] mb-0 whitespace-pre">​</p>
        <p className="leading-[18px] mb-0 whitespace-pre">​</p>
        <p className="leading-[18px] whitespace-pre">{`Select Agent Versions: `}</p>
      </div>
      <RunQueryDropdown1 />
    </div>
  );
}

function ListItems2() {
  return (
    <div className="h-[34px] relative shrink-0 w-[210px]" data-name="List items">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[16px] not-italic text-[#181825] text-[14px] top-[calc(50%-9px)] whitespace-nowrap">​</p>
    </div>
  );
}

function AutoModelingMenu2() {
  return (
    <div className="absolute bg-white content-stretch drop-shadow-[0px_3px_5px_rgba(24,24,37,0.2)] flex flex-col h-[67px] items-start left-[552px] px-[4px] py-[10px] rounded-[8px] top-[232px] w-[224px]" data-name="Auto Modeling Menu">
      <ListItems2 />
    </div>
  );
}

function RunQueryDropdown2() {
  return (
    <div className="absolute contents left-[552px] top-[232px]" data-name="run query dropdown">
      <AutoModelingMenu2 />
      <div className="[word-break:break-word] absolute font-['SF_Pro_Text:Regular',sans-serif] h-[49px] leading-[0] left-[573px] not-italic text-[#181825] text-[14px] top-[calc(50%-200.5px)] w-[207px]">
        <p className="leading-[28px] mb-0">Baseline Agent</p>
        <p className="leading-[28px]">Version 2</p>
      </div>
    </div>
  );
}

function QuestionPanel() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-white h-[881px] left-[calc(50%-189px)] overflow-clip rounded-[8px] shadow-[0px_2px_15px_0px_rgba(0,0,0,0.15)] top-[calc(50%-3.5px)] w-[1251px]" data-name="Question Panel">
      <div className="absolute h-0 left-[24px] top-[56.5px] w-[1200.008px]">
        <div className="absolute inset-[-1px_0_0_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1200.01 1">
            <line id="Line 12" stroke="var(--stroke-0, #D1D1D1)" x2="1200.01" y1="0.5" y2="0.5" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['SF_Pro_Text:Semibold',sans-serif] leading-[18px] left-[24px] not-italic text-[#2d2d2d] text-[16px] top-[17px] tracking-[0.32px] whitespace-nowrap">{`Compare Versions `}</p>
      <div className="absolute h-[205px] left-[1240px] top-[361px] w-[4px]" data-name="Scrollbar">
        <div className="absolute bg-[rgba(24,24,37,0.2)] inset-0 rounded-[6px]" data-name="Scrollbar" />
      </div>
      <VersionSelection />
      <RunQueryDropdown2 />
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

function Frame() {
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
      <Frame />
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

function EditingModeToolbarIndicator1() {
  return <div className="absolute right-[713px] size-[11px] top-[20px]" data-name="Editing Mode - Toolbar Indicator" />;
}

function TextWithCursor3() {
  return (
    <div className="content-stretch flex items-end relative shrink-0" data-name="Text with Cursor">
      <div className="h-[17px] relative shrink-0 w-[0.001px]" data-name="Height Spacer" />
      <div className="[word-break:break-word] flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#181825] text-[12px] whitespace-nowrap">
        <p className="leading-[16px]">Compare Versions</p>
      </div>
    </div>
  );
}

function DropdownInput() {
  return (
    <div className="absolute bg-[rgba(153,180,208,0.1)] content-stretch flex h-[26px] items-center justify-between left-[32px] overflow-clip px-[10px] py-[11px] rounded-[6px] top-[10px] w-[134px]" data-name="Dropdown Input">
      <TextWithCursor3 />
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
      <RIghtSideIcons />
      <EditingModeToolbarIndicator1 />
      <DropdownInput />
      <div className="absolute bg-[#6ea9fb] content-stretch flex gap-[10px] h-[26px] items-center justify-center left-[1341px] max-h-[26px] min-h-[26px] min-w-[60px] overflow-clip px-[12px] py-[4px] rounded-[6px] top-[9px]" data-name="Button">
        <p className="[word-break:break-word] font-['SF_Pro_Text:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap">Run All</p>
      </div>
    </div>
  );
}

function AiSuggestionsV4Micro() {
  return (
    <div className="absolute bg-white h-[976px] left-[1282px] overflow-clip shadow-[-1px_0px_2px_0px_rgba(0,0,0,0.1)] top-[48px] w-[379px]" data-name="AI suggestions V4 - micro">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-[81px] not-italic text-[#7b7b7b] text-[14px] top-[388px] whitespace-nowrap">Run Comparison to View Insights</p>
    </div>
  );
}

export default function CompareVersions() {
  return (
    <div className="bg-[#fafafa] relative size-full" data-name="Compare Versions">
      <EditingModeToolbarIndicator />
      <div className="absolute bg-[rgba(41,49,59,0.4)] bottom-1/4 left-[75.71%] right-[23.93%] rounded-[6px] top-[65.23%]" data-name="Scrollbar" />
      <QuestionPanel />
      <WebLibraryHomeToolbar />
      <AiSuggestionsV4Micro />
    </div>
  );
}