import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import MacroView from "@/imports/MacroViewV2/index";
import MicroView from "@/imports/MicroView/index";
import CompareVersions from "@/imports/CompareVersions/index";
import CompareVersions2 from "@/imports/CompareVersions-2/index";
import CompareVersions4 from "@/imports/CompareVersions-4/index";

// ─── Right panel – Column Descriptions overlay ───────────────────────────────
// Matches MacroViewV2 AiSuggestionsV4Micro exactly: left-[1277px] top-[68px] w-[379px] h-[700px]
const RP_LEFT = 1277;
const RP_TOP = 68;
const RP_W = 379;
const RP_H = 700;

// Tab bar within panel: left=20, top=20; Custom tab w=152, gap=14, Column tab w=144
const TAB_PANEL_Y = 20;
const TAB_H = 54; // taller than design so it's easy to click
const TAB1_PANEL_X = 20; // Custom Instructions
const TAB1_W = 152;
const TAB2_PANEL_X = 20 + 152 + 14; // Column Descriptions = 186
const TAB2_W = 144;

function ColumnDescriptionsPanel({ onClose }: { onClose: () => void }) {
  const sf = "system-ui,-apple-system,sans-serif";
  const inter = "Inter,system-ui,sans-serif";
  const [sectionOpen, setSectionOpen] = useState(true);

  return (
    <div style={{
      position: "absolute",
      left: RP_LEFT, top: RP_TOP, width: RP_W, height: RP_H,
      background: "white", borderRadius: 8,
      boxShadow: "-1px 0px 12px 0px rgba(0,0,0,0.15)",
      overflow: "hidden", zIndex: 10,
    }}>
      {/* Tab bar */}
      <div style={{ position: "absolute", top: 20, left: 20, display: "flex", gap: 14, alignItems: "flex-end", height: 34 }}>
        {/* Custom Instructions — inactive */}
        <div
          onClick={onClose}
          style={{ cursor: "pointer", flexShrink: 0, paddingBottom: 10 }}
        >
          <span style={{ fontFamily: inter, fontSize: 14, color: "#181825", lineHeight: "22px" }}>
            Custom Instructions
          </span>
        </div>
        {/* Column Descriptions — active */}
        <div style={{ flexShrink: 0, position: "relative", paddingBottom: 10 }}>
          <span style={{ fontFamily: inter, fontSize: 14, fontWeight: 600, color: "#0e6ff9", lineHeight: "22px" }}>
            Column Descriptions
          </span>
          {/* Blue underline */}
          <div style={{ position: "absolute", bottom: 0, left: 0, width: 152, height: 3, background: "#0e6ff9", borderRadius: "2px 2px 0 0" }} />
        </div>
      </div>

      {/* Separator under tab bar */}
      <div style={{ position: "absolute", top: 54, left: 0, right: 0, height: 1, background: "#ececec" }} />

      {/* Static content */}
      <div style={{ position: "absolute", top: 55, left: 0, right: 0, bottom: 0, overflow: "hidden" }}>
        {/* Section header */}
        <div
          onClick={() => setSectionOpen(v => !v)}
          style={{
            display: "flex", alignItems: "center", gap: 6,
            padding: "12px 12px 8px 9px", cursor: "pointer",
          }}
        >
          <motion.div
            animate={{ rotate: sectionOpen ? 0 : -90 }}
            transition={{ duration: 0.2 }}
            style={{ display: "flex", transformOrigin: "50% 50%" }}
          >
            {/* Chevron pointing down (collapse indicator) */}
            <svg width="12" height="7" viewBox="0 0 11.3186 6.72747" fill="none">
              <line stroke="black" transform="matrix(0.686144 0.727466 -0.686144 0.727466 0 0.727466)" x2="8.24781" y1="-0.5" y2="-0.5" />
              <line stroke="black" transform="matrix(-0.686144 0.727466 0.686144 0.727466 11.3186 0.727466)" x2="8.24781" y1="-0.5" y2="-0.5" />
            </svg>
          </motion.div>
          <span style={{ fontFamily: sf, fontSize: 14, color: "black", letterSpacing: 0.28, lineHeight: "20px" }}>
            Retail Delivery Order Data
          </span>
        </div>

        {/* Section body */}
        {sectionOpen && (
          <div style={{ padding: "0 12px 0 25px" }}>
            {/* Dataset description */}
            <p style={{ fontFamily: sf, fontSize: 14, color: "#2d2d2d", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 20px" }}>
              This dataset serves as the primary transaction and fulfillment ledger for our retail delivery operations, capturing essential post-checkout logistics. It tracks unique product identifiers, transaction codes, shipping destinations, and precise carrier drop-off timestamps. An AI chatbot can leverage this structured data to instantly resolve customer support inquiries, verify shipping success, and provide geographic status updates.
            </p>

            {/* Product ID */}
            <p style={{ fontFamily: sf, fontSize: 14, color: "#2d2d2d", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 6px" }}>
              Product ID
            </p>
            <p style={{ fontFamily: sf, fontSize: 14, color: "#2d2d2d", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 20px" }}>
              {`Also referred to as "item code" or "SKU." This is the unique alphanumeric string assigned to every item in our catalog. If a user asks "what did I buy?" or "can you look up this item?", cross-reference their query against this field.`}
            </p>

            {/* Order Number */}
            <p style={{ fontFamily: sf, fontSize: 14, color: "#2d2d2d", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 6px" }}>
              Order Number
            </p>
            <p style={{ fontFamily: sf, fontSize: 14, color: "#7b7b7b", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 20px" }}>
              {`Also known as "invoice number" or "purchase ID." This is the primary key used to track a complete transaction from checkout to delivery. Use this field when a user asks about the status, return eligibility, or contents of a specific purchase.`}
            </p>

            {/* Location (City) — faded, partially visible */}
            <p style={{ fontFamily: sf, fontSize: 14, color: "rgba(45,45,45,0.23)", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 6px" }}>
              Location (City)
            </p>
            <p style={{ fontFamily: sf, fontSize: 14, color: "rgba(45,45,45,0.23)", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 20px" }}>
              {`Also known by "place," "destination," or "shipping address." This represents the city and state that the delivery was made to. When a user asks "where is my package?" or "did it arrive at my house?", query this column to provide geographic updates.`}
            </p>

            {/* Time Delivered — very faded */}
            <p style={{ fontFamily: sf, fontSize: 14, color: "rgba(45,45,45,0.15)", lineHeight: "20px", letterSpacing: 0.28, margin: 0 }}>
              Time Delivered
            </p>
          </div>
        )}
      </div>

    </div>
  );
}

// Lightbulb badge rendered at exact canvas coords matching MacroViewV2
// Panel left=1277+330=1607, top=68+663=731
function LightbulbBadge() {
  const sf = "system-ui,-apple-system,sans-serif";
  return (
    <div style={{ position: "absolute", left: 1607, top: 731, width: 20, height: 20, overflow: "visible", zIndex: 20 }}>
      <svg width="17" height="20" viewBox="0 0 16.9002 19.9982" fill="none">
        <path d="M13.2034 9.19261C12.8648 10.229 12.208 11.1629 11.2024 11.994C10.5148 12.5687 10.1865 13.2357 10.1865 14.0464C10.1865 14.0669 10.1865 14.0874 10.1865 14.108H4.79908C4.79908 14.108 4.79908 14.0464 4.79908 14.0156C4.79908 13.2152 4.46045 12.5482 3.79344 12.0146C2.52099 11.0089 1.77189 9.69543 1.57692 8.1254C1.22802 5.32396 2.90067 2.73802 5.64054 1.84525C6.24598 1.65028 6.87194 1.54767 7.50816 1.54767C8.27779 1.54767 9.04741 1.70159 9.77599 1.98892L10.8329 1.59897L11.0895 0.911442C9.26291 -0.0736782 7.11822 -0.26865 5.1685 0.367574C1.72058 1.49636 -0.383064 4.75957 0.0581879 8.29985C0.304468 10.2803 1.23828 11.9325 2.84936 13.2049C3.14695 13.4409 3.28035 13.677 3.28035 13.9951C3.28035 14.7031 3.28035 14.816 3.28035 14.8981C3.28035 14.9802 3.28035 15.0212 3.28035 15.6575V15.8114C3.30088 18.1203 5.19929 19.9982 7.50816 19.9982C9.81704 19.9982 11.736 18.0997 11.736 15.7703C11.736 15.1239 11.736 15.011 11.736 14.9391C11.736 14.8571 11.736 14.8263 11.736 14.0259C11.736 13.6872 11.8591 13.4409 12.1875 13.1741C14.0346 11.6452 14.9684 9.72622 14.9889 7.56101L14.8145 8.0433C14.5374 8.79241 13.8807 9.17209 13.2137 9.19261H13.2034Z" fill="#0E6FF9" />
      </svg>
      {/* Orange notification dot */}
      <div style={{ position: "absolute", top: -8, left: 11, width: 14, height: 14, borderRadius: "50%", background: "#EE5E32", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontFamily: sf, fontSize: 12, color: "white", lineHeight: "18px" }}>3</span>
      </div>
    </div>
  );
}

// ─── Micro view – Column Descriptions right panel overlay ────────────────────
// MicroView AiSuggestionsV4Micro: left-[1282px] top-[48px] w-[379px] h-[976px]
const MICRO_RP_LEFT = 1282;
const MICRO_RP_TOP = 48;
const MICRO_RP_W = 379;
const MICRO_RP_H = 976;

function MicroColumnDescPanel({ onClose }: { onClose: () => void }) {
  const sf = "system-ui,-apple-system,sans-serif";
  const inter = "Inter,system-ui,sans-serif";
  const [sectionOpen, setSectionOpen] = useState(true);

  return (
    <div style={{
      position: "absolute",
      left: MICRO_RP_LEFT, top: MICRO_RP_TOP,
      width: MICRO_RP_W, height: MICRO_RP_H,
      background: "white",
      boxShadow: "-1px 0px 2px 0px rgba(0,0,0,0.1)",
      overflow: "hidden", zIndex: 10,
    }}>
      {/* Tab bar */}
      <div style={{ position: "absolute", top: 20, left: 20, display: "flex", gap: 14, alignItems: "flex-end", height: 34 }}>
        <div onClick={onClose} style={{ cursor: "pointer", flexShrink: 0, paddingBottom: 10 }}>
          <span style={{ fontFamily: inter, fontSize: 14, color: "#181825", lineHeight: "22px" }}>
            Custom Instructions
          </span>
        </div>
        <div style={{ flexShrink: 0, position: "relative", paddingBottom: 10 }}>
          <span style={{ fontFamily: inter, fontSize: 14, fontWeight: 600, color: "#0e6ff9", lineHeight: "22px" }}>
            Column Descriptions
          </span>
          <div style={{ position: "absolute", bottom: 0, left: 0, width: 152, height: 3, background: "#0e6ff9", borderRadius: "2px 2px 0 0" }} />
        </div>
      </div>

      {/* Separator */}
      <div style={{ position: "absolute", top: 54, left: 0, right: 0, height: 1, background: "#ececec" }} />

      {/* Static content area */}
      <div style={{ position: "absolute", top: 55, left: 0, right: 0, bottom: 160, overflow: "hidden" }}>
        {/* Section header */}
        <div
          onClick={() => setSectionOpen(v => !v)}
          style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 12px 8px 9px", cursor: "pointer" }}
        >
          <motion.div animate={{ rotate: sectionOpen ? 0 : -90 }} transition={{ duration: 0.2 }} style={{ display: "flex", transformOrigin: "50% 50%" }}>
            <svg width="12" height="7" viewBox="0 0 11.3186 6.72747" fill="none">
              <line stroke="black" transform="matrix(0.686144 0.727466 -0.686144 0.727466 0 0.727466)" x2="8.24781" y1="-0.5" y2="-0.5" />
              <line stroke="black" transform="matrix(-0.686144 0.727466 0.686144 0.727466 11.3186 0.727466)" x2="8.24781" y1="-0.5" y2="-0.5" />
            </svg>
          </motion.div>
          <span style={{ fontFamily: sf, fontSize: 14, color: "black", letterSpacing: 0.28, lineHeight: "20px" }}>
            Retail Delivery Order Data
          </span>
        </div>

        {sectionOpen && (
          <div style={{ padding: "0 12px 0 25px" }}>
            <p style={{ fontFamily: sf, fontSize: 14, color: "#2d2d2d", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 20px" }}>
              This dataset serves as the primary transaction and fulfillment ledger for our retail delivery operations, capturing essential post-checkout logistics. It tracks unique product identifiers, transaction codes, shipping destinations, and precise carrier drop-off timestamps. An AI chatbot can leverage this structured data to instantly resolve customer support inquiries, verify shipping success, and provide geographic status updates.
            </p>
            <p style={{ fontFamily: sf, fontSize: 14, color: "#2d2d2d", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 6px" }}>Product ID</p>
            <p style={{ fontFamily: sf, fontSize: 14, color: "#2d2d2d", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 20px" }}>
              {`Also referred to as "item code" or "SKU." This is the unique alphanumeric string assigned to every item in our catalog. If a user asks "what did I buy?" or "can you look up this item?", cross-reference their query against this field.`}
            </p>
            <p style={{ fontFamily: sf, fontSize: 14, color: "#2d2d2d", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 6px" }}>Order Number</p>
            <p style={{ fontFamily: sf, fontSize: 14, color: "#7b7b7b", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 20px" }}>
              {`Also known as "invoice number" or "purchase ID." This is the primary key used to track a complete transaction from checkout to delivery. Use this field when a user asks about the status, return eligibility, or contents of a specific purchase.`}
            </p>
            <p style={{ fontFamily: sf, fontSize: 14, color: "rgba(45,45,45,0.23)", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 6px" }}>Location (City)</p>
            <p style={{ fontFamily: sf, fontSize: 14, color: "rgba(45,45,45,0.23)", lineHeight: "20px", letterSpacing: 0.28, margin: 0 }}>
              {`Also known by "place," "destination," or "shipping address." This represents the city and state that the delivery was made to.`}
            </p>
          </div>
        )}
      </div>

      {/* Query box at bottom */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 160, borderTop: "1px solid #ececec", background: "white", padding: "12px 16px 6px" }}>
        <div style={{ border: "1px solid #e0e4e7", borderRadius: 8, padding: "10px 12px", height: 90, background: "white" }}>
          <p style={{ fontFamily: sf, fontSize: 14, color: "#727679", lineHeight: "18px", margin: 0 }}>
            Describe an issue you&apos;re seeing... [ex. &quot;Make the agent stop ignoring shipping fees for revenue questions&quot;]
          </p>
        </div>
        <p style={{ fontFamily: sf, fontSize: 11, color: "#727679", lineHeight: "14px", textAlign: "center", margin: "6px 0 0" }}>
          AI can make mistakes. Consider checking important information for accuracy.
        </p>
      </div>

      {/* Lightbulb — panel-relative left=330, top=706 (matching Lightbulb1 in import) */}
      <div style={{ position: "absolute", left: 330, top: 706, width: 20, height: 20, overflow: "visible", zIndex: 2 }}>
        <svg width="17" height="20" viewBox="0 0 16.9002 19.9982" fill="none">
          <path d="M13.2034 9.19261C12.8648 10.229 12.208 11.1629 11.2024 11.994C10.5148 12.5687 10.1865 13.2357 10.1865 14.0464C10.1865 14.0669 10.1865 14.0874 10.1865 14.108H4.79908C4.79908 14.108 4.79908 14.0464 4.79908 14.0156C4.79908 13.2152 4.46045 12.5482 3.79344 12.0146C2.52099 11.0089 1.77189 9.69543 1.57692 8.1254C1.22802 5.32396 2.90067 2.73802 5.64054 1.84525C6.24598 1.65028 6.87194 1.54767 7.50816 1.54767C8.27779 1.54767 9.04741 1.70159 9.77599 1.98892L10.8329 1.59897L11.0895 0.911442C9.26291 -0.0736782 7.11822 -0.26865 5.1685 0.367574C1.72058 1.49636 -0.383064 4.75957 0.0581879 8.29985C0.304468 10.2803 1.23828 11.9325 2.84936 13.2049C3.14695 13.4409 3.28035 13.677 3.28035 13.9951C3.28035 14.7031 3.28035 14.816 3.28035 14.8981C3.28035 14.9802 3.28035 15.0212 3.28035 15.6575V15.8114C3.30088 18.1203 5.19929 19.9982 7.50816 19.9982C9.81704 19.9982 11.736 18.0997 11.736 15.7703C11.736 15.1239 11.736 15.011 11.736 14.9391C11.736 14.8571 11.736 14.8263 11.736 14.0259C11.736 13.6872 11.8591 13.4409 12.1875 13.1741C14.0346 11.6452 14.9684 9.72622 14.9889 7.56101L14.8145 8.0433C14.5374 8.79241 13.8807 9.17209 13.2137 9.19261H13.2034Z" fill="#0E6FF9" />
        </svg>
        <div style={{ position: "absolute", top: -8, left: 11, width: 14, height: 14, borderRadius: "50%", background: "#EE5E32", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: sf, fontSize: 12, color: "white", lineHeight: "18px" }}>3</span>
        </div>
      </div>
    </div>
  );
}

// ─── Canvas constants ───────────────────────────────────────────────────────
const DESIGN_WIDTH = 1663;
const DESIGN_HEIGHT = 1024;

// QuestionPanel: left=calc(50%-189px)=642.5, top=calc(50%+3px)=515 at this canvas,
// translate(-50%,-50%) → visual top-left = (17, 68), size 1251×894
const PANEL_VIS_LEFT = 17;
const PANEL_VIS_TOP = 68;
const PANEL_W = 1251;
const PANEL_H = 894;

// Overlay begins just above the QUESTIONS/STATUS column headers (panel y=232).
// Panel y=218 → overlay y=0; panel y=232 → overlay y=14; dividers/rows at panel y=262 → overlay y=44.
const OVERLAY_PANEL_Y = 218;
const ROWS_OFFSET_Y = 44; // overlay-local y where rows begin (after col headers)
const ROW_H = 63.17; // px per row (from divider spacing in Figma)
const Q1_EXPAND_H = 404; // px height of Q1 detail section when expanded

// ─── Data ────────────────────────────────────────────────────────────────────
type Status = "expected" | "flagged" | "expected-dim";

const QUESTIONS: Array<{ text: string; status: Status; dot?: true }> = [
  { text: "1. What was the total revenue generated from Order #105?",                                                          status: "flagged",      dot: true },
  { text: "2. How many items are currently stocked in the Texas warehouse that are flagged for order?",                        status: "expected"               },
  { text: "3. How many Shirts did we sell yesterday?",                                                                         status: "flagged",      dot: true },
  { text: "4. What is our standard return policy for damaged items?",                                                          status: "expected"               },
  { text: "5. Who are the primary customers that are buying sporting goods?",                                                  status: "expected"               },
  { text: "6. What is the average customer review score for Winter Jackets? Give me the breakdown by different...",            status: "expected"               },
  { text: "7. What is the most expensive item currently in the catalog?",                                                      status: "expected"               },
  { text: "8. Did order #108 ship out on time?",                                                                               status: "flagged",      dot: true },
  { text: "9. Create a line graph of revenue across Q2 sales.",                                                               status: "expected"               },
  { text: "10. What is the most popular item that is listed under accessories and has been purchased in at least..",           status: "expected-dim"           },
];

// ─── Sub-components ──────────────────────────────────────────────────────────
function OrangeDot() {
  return (
    <svg width="11" height="11" viewBox="0 0 10.9455 11" fill="none" style={{ display: "block" }}>
      <ellipse cx="5.47274" cy="5.5" fill="#EEB076" rx="5.47274" ry="5.5" />
    </svg>
  );
}

function StatusBadge({ status }: { status: Status }) {
  if (status === "flagged") {
    return (
      <div style={{
        background: "rgba(238,176,118,0.48)", borderRadius: 8,
        height: 23.76, width: 59.7,
        display: "flex", alignItems: "center", paddingLeft: 6,
        flexShrink: 0,
      }}>
        <span style={{ fontFamily: "system-ui,-apple-system,sans-serif", fontSize: 12, fontWeight: 600, color: "#925a25", letterSpacing: -0.132 }}>Flagged</span>
      </div>
    );
  }
  const alpha = status === "expected-dim" ? 0.22 : 0.4;
  const textAlpha = status === "expected-dim" ? 0.69 : 1;
  return (
    <div style={{
      background: `rgba(152,225,132,${alpha})`, borderRadius: 8,
      height: 23.76, width: 68.66,
      display: "flex", alignItems: "center", paddingLeft: 7,
      flexShrink: 0,
    }}>
      <span style={{ fontFamily: "system-ui,-apple-system,sans-serif", fontSize: 12, fontWeight: 600, color: `rgba(40,95,25,${textAlpha})`, letterSpacing: -0.132 }}>Expected</span>
    </div>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <motion.div
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
      style={{ display: "flex", transformOrigin: "50% 50%" }}
    >
      <svg width="23" height="12" viewBox="0 0 22.886 11.3858" fill="none">
        <line stroke="black" transform="matrix(0.731663 0.681666 -0.689048 0.724716 0.0000375579 0.724716)" x2="15.6397" y1="-0.5" y2="-0.5" />
        <line stroke="black" transform="matrix(-0.731663 0.681666 0.689048 0.724716 22.886 0.724716)" x2="15.6397" y1="-0.5" y2="-0.5" />
      </svg>
    </motion.div>
  );
}

// ─── Q1 expanded detail ───────────────────────────────────────────────────────
function Q1Detail({ onInspect }: { onInspect: () => void }) {
  const [tab, setTab] = useState<"insights" | "expected">("insights");
  const sf = "system-ui,-apple-system,sans-serif";
  const inter = "Inter,system-ui,sans-serif";

  return (
    <div style={{ position: "relative", height: Q1_EXPAND_H }}>
      {/* Orange agent-answer box */}
      <div style={{
        position: "absolute", top: 4, left: 30, width: 1161, height: 334,
        background: "rgba(238,176,118,0.10)",
        border: "1px solid rgba(238,176,118,0.32)",
        borderRadius: 8,
      }}>
        {/* Inspect Question link */}
        <span
          onClick={onInspect}
          style={{
            position: "absolute", top: 10, right: 16,
            fontFamily: sf, fontSize: 12, color: "#0d64e0", cursor: "pointer", whiteSpace: "nowrap",
          }}
        >
          Inspect Question &gt;
        </span>

        {/* AGENT ANSWER label */}
        <span style={{
          position: "absolute", top: 17, left: 31,
          fontFamily: sf, fontSize: 12, fontWeight: 600, color: "#7b7b7b", letterSpacing: 0.24,
        }}>
          AGENT ANSWER
        </span>

        {/* Response body */}
        <div style={{
          position: "absolute", top: 49, left: 31, right: 16,
          fontFamily: sf, fontSize: 14, color: "#2d2d2d",
          letterSpacing: -0.154, lineHeight: "21px",
        }}>
          <p style={{ margin: 0 }}>
            The total revenue generated from Order #105 was{" "}
            <strong>$50.00</strong> on a pair of <strong>boots.</strong>{" "}
            This took place on June 21st, 2026 and the order successfully shipped.
            Here are a few key insights about this one order:
          </p>
          <ul style={{ margin: "12px 0 0 0", paddingLeft: 20 }}>
            <li>this item has been sold in <strong>25</strong> different orders – it must be popular!</li>
            <li>Orders typically holding <strong>boots</strong> will also hold <strong>gloves</strong></li>
          </ul>
        </div>

        {/* Blue insights/expected-answer panel (nested inside orange box) */}
        <div style={{
          position: "absolute", top: 178, left: 16, right: 16, height: 145,
          background: "#f7faff", border: "1px solid #cbd2de", borderRadius: 8, overflow: "hidden",
        }}>
          {/* Tabs */}
          <div style={{ display: "flex", gap: 20, paddingLeft: 19, paddingTop: 12, alignItems: "flex-end", borderBottom: "1px solid #e5e9f0" }}>
            {(["insights", "expected"] as const).map((t) => {
              const label = t === "insights" ? "Insights" : "Expected Answer";
              const active = tab === t;
              return (
                <div
                  key={t}
                  onClick={() => setTab(t)}
                  style={{ cursor: "pointer", paddingBottom: 8, position: "relative" }}
                >
                  <span style={{
                    fontFamily: inter, fontSize: 12,
                    fontWeight: active ? 600 : 400,
                    color: active ? "#0e6ff9" : "#727679",
                    lineHeight: "22px",
                  }}>{label}</span>
                  {active && (
                    <div style={{
                      position: "absolute", bottom: 0, left: 0, right: 0,
                      height: 3, background: "#0e6ff9", borderRadius: "2px 2px 0 0",
                    }} />
                  )}
                </div>
              );
            })}
          </div>

          {/* Tab content */}
          <div style={{
            padding: "14px 19px 0",
            fontFamily: sf, fontSize: 14, color: "#2d2d2d",
            letterSpacing: -0.154, lineHeight: "21px",
          }}>
            {tab === "insights"
              ? "The agent answer is based off of an interpretation that differs from the expected answer. The final revenue calculated by the agent didn't include shipping fee, but is a sum of the products associated with the order."
              : (
                <span>
                  The total revenue is <strong>$55.00</strong>. This can be found by querying <strong>Order ID</strong> by 105 and summing all <strong>Prices</strong> and <strong>Shipping fee</strong>. The revenue can also just be the price, but it must be clarified that it is not including the shipping fee in the calculation.
                </span>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Question row ─────────────────────────────────────────────────────────────
function QuestionRow({
  question,
  isQ1,
  expanded,
  onToggle,
  onInspect,
}: {
  question: typeof QUESTIONS[0];
  isQ1: boolean;
  expanded: boolean;
  onToggle?: () => void;
  onInspect?: () => void;
}) {
  return (
    <div>
      {/* Row header — fixed height, all items absolutely placed within */}
      <div style={{ borderTop: "1px solid #ECECEC", height: ROW_H, position: "relative" }}>
        {question.dot && (
          <div style={{ position: "absolute", left: 19, top: "50%", transform: "translateY(-50%)" }}>
            <OrangeDot />
          </div>
        )}
        <div style={{
          position: "absolute",
          left: 36.91, right: 250,
          top: 0, bottom: 0,
          display: "flex", alignItems: "center",
          fontFamily: "system-ui,-apple-system,sans-serif",
          fontSize: 14, fontWeight: 500,
          color: question.status === "expected-dim" ? "rgba(45,45,45,0.57)" : "#2d2d2d",
          letterSpacing: -0.154,
          whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis",
        }}>
          {question.text}
        </div>
        <div style={{ position: "absolute", left: 954, top: "50%", transform: "translateY(-50%)" }}>
          <StatusBadge status={question.status} />
        </div>
        <div
          onClick={isQ1 ? onToggle : undefined}
          style={{
            position: "absolute",
            left: 1168, top: "50%", transform: "translateY(-50%)",
            cursor: isQ1 ? "pointer" : "default",
            padding: "8px 10px",
            marginLeft: -10, marginTop: -8,
          }}
        >
          <Chevron open={isQ1 && expanded} />
        </div>
      </div>

      {/* Expandable detail — only on Q1 */}
      {isQ1 && (
        <motion.div
          initial={false}
          animate={{ height: expanded ? Q1_EXPAND_H : 0 }}
          transition={{ duration: 0.38, ease: [0.4, 0, 0.2, 1] }}
          style={{ overflow: "hidden" }}
        >
          <Q1Detail onInspect={onInspect ?? (() => {})} />
        </motion.div>
      )}
    </div>
  );
}

// ─── Animated question list overlay ──────────────────────────────────────────
function QuestionList({ expanded, onToggle, onInspect }: { expanded: boolean; onToggle: () => void; onInspect: () => void }) {
  const sf = "system-ui,-apple-system,sans-serif";

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", overflow: "hidden" }}>
      {/* Column headers */}
      <div style={{ position: "absolute", top: 14, left: 0, right: 0 }}>
        <span style={{
          position: "absolute", left: 35,
          fontFamily: sf, fontSize: 12, fontWeight: 600, color: "#464646",
          letterSpacing: 0.24, lineHeight: "18px",
        }}>QUESTIONS</span>
        <span style={{
          position: "absolute", left: 962, width: 48.76, textAlign: "center",
          fontFamily: sf, fontSize: 12, fontWeight: 600, color: "#464646",
          letterSpacing: 0.24, lineHeight: "18px",
        }}>STATUS</span>
      </div>

      {/* Rows — in normal flow so Q2-Q10 slide down as Q1 expands */}
      <div style={{ position: "absolute", top: ROWS_OFFSET_Y, left: 0, right: 0 }}>
        {QUESTIONS.map((q, i) => (
          <QuestionRow
            key={i}
            question={q}
            isQ1={i === 0}
            expanded={expanded}
            onToggle={onToggle}
            onInspect={onInspect}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Unified Right Panel ─────────────────────────────────────────────────────
// Two floating cards matching MacroViewV2 layout:
//   Main card:  left=1277 top=68 w=379 h=700  (rounded, shadow)
//   Query card: left=1276 top=783 w=380 h=179 (separate floating card)
// Renders on top of both macro and micro views.
function UnifiedRightPanel({ tab, onTabChange, view }: { tab: "custom" | "column"; onTabChange: (t: "custom" | "column") => void; view: "macro" | "micro" }) {
  const sf = "system-ui,-apple-system,sans-serif";
  const inter = "Inter,system-ui,sans-serif";
  const [sectionOpen, setSectionOpen] = useState(true);

  const tabBar = (
    <div style={{ position: "absolute", top: 20, left: 20, display: "flex", gap: 14, alignItems: "flex-end", height: 34 }}>
      {/* Custom Instructions tab */}
      <div onClick={() => onTabChange("custom")} style={{ cursor: "pointer", flexShrink: 0, paddingBottom: 10, position: "relative" }}>
        <span style={{ fontFamily: inter, fontSize: 14, fontWeight: tab === "custom" ? 600 : 400, color: tab === "custom" ? "#0e6ff9" : "#181825", lineHeight: "22px" }}>
          Custom Instructions
        </span>
        {tab === "custom" && (
          <div style={{ position: "absolute", bottom: 0, left: 0, width: 152, height: 3, background: "#0e6ff9", borderRadius: "2px 2px 0 0" }} />
        )}
      </div>
      {/* Column Descriptions tab */}
      <div onClick={() => onTabChange("column")} style={{ cursor: "pointer", flexShrink: 0, paddingBottom: 10, position: "relative" }}>
        <span style={{ fontFamily: inter, fontSize: 14, fontWeight: tab === "column" ? 600 : 400, color: tab === "column" ? "#0e6ff9" : "#181825", lineHeight: "22px" }}>
          Column Descriptions
        </span>
        {tab === "column" && (
          <div style={{ position: "absolute", bottom: 0, left: 0, width: 152, height: 3, background: "#0e6ff9", borderRadius: "2px 2px 0 0" }} />
        )}
      </div>
    </div>
  );

  const customContent = (
    <div style={{ position: "absolute", top: 76, left: 17, right: 17, bottom: 0, overflow: "hidden" }}>
      <p style={{ fontFamily: sf, fontSize: 12, color: "#29313b", lineHeight: "16px", letterSpacing: 0, margin: "0 0 18px", textTransform: "uppercase" }}>Custom Instructions</p>
      {/* Toggle row */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
        <span style={{ fontFamily: sf, fontSize: 12, color: "#29313b", lineHeight: "18px" }}>Show diffs since last save</span>
        <div style={{ width: 37, height: 20, position: "relative", flexShrink: 0 }}>
          <div style={{ position: "absolute", left: 0, top: 6, width: 24, height: 8, background: "#0e6ff9", borderRadius: 4 }} />
          <div style={{ position: "absolute", left: 18, top: 1, width: 18, height: 18, borderRadius: "50%", background: "white", boxShadow: "0 1px 2px rgba(14,111,249,0.4), 0 1px 1px rgba(0,0,0,0.3)", border: "0.5px solid rgba(14,111,249,0.4)" }} />
        </div>
      </div>
      {/* Box 1 */}
      <div style={{ marginBottom: 18 }}>
        <p style={{ fontFamily: sf, fontSize: 14, color: "#29313b", lineHeight: "18px", margin: "0 0 6px" }}>Tell the bot about your business background, and the special requirements on the data.</p>
        <div style={{ background: "#f2f3f5", borderRadius: 4, height: 188, marginBottom: 4, position: "relative", overflow: "hidden" }}>
          <div style={{ position: "absolute", left: 7, top: 9, width: 324, height: 17, background: "rgba(206,245,195,0.4)" }} />
          <div style={{ position: "absolute", left: 7, top: 26, width: 183, height: 17, background: "rgba(206,245,195,0.4)" }} />
          <p style={{ fontFamily: inter, fontSize: 14, color: "black", lineHeight: "18px", margin: 0, position: "absolute", left: 12, top: 6, width: 332 }}>
            A sale refers to an individual order which may contain multiple products.
          </p>
        </div>
        <p style={{ fontFamily: sf, fontSize: 12, color: "#727679", lineHeight: "16px", textAlign: "right", margin: 0 }}>0/500</p>
      </div>
      {/* Box 2 */}
      <div style={{ marginBottom: 18 }}>
        <p style={{ fontFamily: sf, fontSize: 14, color: "#29313b", lineHeight: "18px", margin: "0 0 6px" }}>Specify the format of the responses that the bot should use.</p>
        <div style={{ background: "rgba(242,243,245,0.43)", borderRadius: 4, height: 191, marginBottom: 4 }} />
      </div>
      {/* Box 3 — faded */}
      <div>
        <p style={{ fontFamily: sf, fontSize: 14, color: "rgba(41,49,59,0.67)", lineHeight: "18px", margin: "0 0 6px" }}>Specify the types of questions that should be rejected at the agent level.</p>
        <div style={{ background: "linear-gradient(to bottom, rgba(242,243,245,0.42), rgba(242,243,245,0.13))", borderRadius: 4, height: 189 }} />
      </div>
    </div>
  );

  const columnContent = (
    <div style={{ position: "absolute", top: 55, left: 0, right: 0, bottom: 0, overflow: "hidden" }}>
      {/* Section header */}
      <div
        onClick={() => setSectionOpen(v => !v)}
        style={{ display: "flex", alignItems: "center", gap: 6, padding: "12px 12px 8px 9px", cursor: "pointer" }}
      >
        <motion.div animate={{ rotate: sectionOpen ? 0 : -90 }} transition={{ duration: 0.2 }} style={{ display: "flex", transformOrigin: "50% 50%" }}>
          <svg width="12" height="7" viewBox="0 0 11.3186 6.72747" fill="none">
            <line stroke="black" transform="matrix(0.686144 0.727466 -0.686144 0.727466 0 0.727466)" x2="8.24781" y1="-0.5" y2="-0.5" />
            <line stroke="black" transform="matrix(-0.686144 0.727466 0.686144 0.727466 11.3186 0.727466)" x2="8.24781" y1="-0.5" y2="-0.5" />
          </svg>
        </motion.div>
        <span style={{ fontFamily: sf, fontSize: 14, color: "black", letterSpacing: 0.28, lineHeight: "20px" }}>Retail Delivery Order Data</span>
      </div>
      {sectionOpen && (
        <div style={{ padding: "0 12px 0 25px" }}>
          <p style={{ fontFamily: sf, fontSize: 14, color: "#2d2d2d", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 20px" }}>
            This dataset serves as the primary transaction and fulfillment ledger for our retail delivery operations, capturing essential post-checkout logistics. It tracks unique product identifiers, transaction codes, shipping destinations, and precise carrier drop-off timestamps. An AI chatbot can leverage this structured data to instantly resolve customer support inquiries, verify shipping success, and provide geographic status updates.
          </p>
          <p style={{ fontFamily: sf, fontSize: 14, color: "#2d2d2d", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 6px" }}>Product ID</p>
          <p style={{ fontFamily: sf, fontSize: 14, color: "#2d2d2d", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 20px" }}>
            {`Also referred to as "item code" or "SKU." This is the unique alphanumeric string assigned to every item in our catalog. If a user asks "what did I buy?" or "can you look up this item?", cross-reference their query against this field.`}
          </p>
          <p style={{ fontFamily: sf, fontSize: 14, color: "#2d2d2d", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 6px" }}>Order Number</p>
          <p style={{ fontFamily: sf, fontSize: 14, color: "#7b7b7b", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 20px" }}>
            {`Also known as "invoice number" or "purchase ID." This is the primary key used to track a complete transaction from checkout to delivery. Use this field when a user asks about the status, return eligibility, or contents of a specific purchase.`}
          </p>
          <p style={{ fontFamily: sf, fontSize: 14, color: "rgba(45,45,45,0.23)", lineHeight: "20px", letterSpacing: 0.28, margin: "0 0 6px" }}>Location (City)</p>
          <p style={{ fontFamily: sf, fontSize: 14, color: "rgba(45,45,45,0.23)", lineHeight: "20px", letterSpacing: 0.28, margin: 0 }}>
            {`Also known by "place," "destination," or "shipping address."`}
          </p>
        </div>
      )}
    </div>
  );

  // Macro: query card top=783, h=179 → bottom=962 (matches question panel bottom)
  // Micro: Interpretation panel bottom = 69+934 = 1003 → query card h = 1003-783 = 220
  const queryCardHeight = view === "micro" ? 220 : 179;

  const lightbulbSvgPath = "M13.2034 9.19261C12.8648 10.229 12.208 11.1629 11.2024 11.994C10.5148 12.5687 10.1865 13.2357 10.1865 14.0464C10.1865 14.0669 10.1865 14.0874 10.1865 14.108H4.79908C4.79908 14.108 4.79908 14.0464 4.79908 14.0156C4.79908 13.2152 4.46045 12.5482 3.79344 12.0146C2.52099 11.0089 1.77189 9.69543 1.57692 8.1254C1.22802 5.32396 2.90067 2.73802 5.64054 1.84525C6.24598 1.65028 6.87194 1.54767 7.50816 1.54767C8.27779 1.54767 9.04741 1.70159 9.77599 1.98892L10.8329 1.59897L11.0895 0.911442C9.26291 -0.0736782 7.11822 -0.26865 5.1685 0.367574C1.72058 1.49636 -0.383064 4.75957 0.0581879 8.29985C0.304468 10.2803 1.23828 11.9325 2.84936 13.2049C3.14695 13.4409 3.28035 13.677 3.28035 13.9951C3.28035 14.7031 3.28035 14.816 3.28035 14.8981C3.28035 14.9802 3.28035 15.0212 3.28035 15.6575V15.8114C3.30088 18.1203 5.19929 19.9982 7.50816 19.9982C9.81704 19.9982 11.736 18.0997 11.736 15.7703C11.736 15.1239 11.736 15.011 11.736 14.9391C11.736 14.8571 11.736 14.8263 11.736 14.0259C11.736 13.6872 11.8591 13.4409 12.1875 13.1741C14.0346 11.6452 14.9684 9.72622 14.9889 7.56101L14.8145 8.0433C14.5374 8.79241 13.8807 9.17209 13.2137 9.19261H13.2034Z";

  return (
    <>
      {/* Cover native right panel from both MacroView and MicroView */}
      <div style={{ position: "absolute", left: 1276, top: 46, width: 390, height: 978, background: "#fafafa", zIndex: 9 }} />

      {/* Main floating card — fixed size across both views */}
      <div style={{
        position: "absolute", left: 1277, top: 68, width: 379, height: 700,
        background: "white", borderRadius: 8,
        boxShadow: "-1px 0px 12px 0px rgba(0,0,0,0.15)",
        overflow: "hidden", zIndex: 10,
      }}>
        {tabBar}
        <div style={{ position: "absolute", top: 54, left: 0, right: 0, height: 1, background: "#ececec" }} />
        {tab === "custom" ? customContent : columnContent}

        {/* Lightbulb locked to bottom-right of main card — never moves */}
        <div style={{ position: "absolute", right: 16, bottom: 16, width: 20, height: 20, overflow: "visible", zIndex: 2 }}>
          <svg width="17" height="20" viewBox="0 0 16.9002 19.9982" fill="none">
            <path d={lightbulbSvgPath} fill="#0E6FF9" />
          </svg>
          <div style={{ position: "absolute", top: -8, left: 11, width: 14, height: 14, borderRadius: "50%", background: "#EE5E32", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ fontFamily: sf, fontSize: 12, color: "white", lineHeight: "18px" }}>3</span>
          </div>
        </div>
      </div>

      {/* Separate floating query box card — grows in micro view */}
      <div style={{
        position: "absolute", left: 1276, top: 783, width: 380, height: queryCardHeight,
        background: "white", borderRadius: 8,
        boxShadow: "-1px 2px 6px 0px rgba(0,0,0,0.13)",
        overflow: "hidden", zIndex: 10,
        display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
        gap: 0,
      }}>
        {/* Inner query box with border and drop shadow */}
        <div style={{
          marginLeft: 16, marginRight: 16, width: "calc(100% - 32px)",
          height: 112, borderRadius: 8, background: "white",
          boxShadow: "0px 1px 2px rgba(0,0,0,0.1)",
          border: "1px solid #e0e4e7",
          padding: "10px 12px", position: "relative",
          display: "flex", flexDirection: "column", gap: 8,
          flexShrink: 0,
        }}>
          <p style={{ fontFamily: sf, fontSize: 14, color: "#727679", lineHeight: "18px", margin: 0, minHeight: 38 }}>
            Describe an issue you&apos;re seeing... (ex. &quot;Make the agent stop ignoring shipping fees for revenue questions&quot;)
          </p>
          {/* Bottom row with magic wand icon */}
          <div style={{ height: 28, width: "100%", position: "relative", flexShrink: 0 }}>
            <div style={{ position: "absolute", right: 3, top: 4, width: 20, height: 20 }}>
              {/* Magic wand / sparkle icon */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <g clipPath="url(#qbe-clip)">
                  <path d="M15.8333 2.5L17.5 5L15.8333 7.5L13.3333 5L15.8333 2.5ZM7.5 10.8333L13.3333 5L15.8333 7.5L10 13.3333L7.5 10.8333ZM2.5 15.8333L7.5 10.8333L9.16667 12.5L4.16667 17.5L2.5 15.8333ZM12.5 2.5L13.3333 4.16667L15 5L13.3333 5.83333L12.5 7.5L11.6667 5.83333L10 5L11.6667 4.16667L12.5 2.5ZM5 12.5L5.41667 13.3333L6.25 13.75L5.41667 14.1667L5 15L4.58333 14.1667L3.75 13.75L4.58333 13.3333L5 12.5Z" fill="#A9ADB1"/>
                </g>
                <defs>
                  <clipPath id="qbe-clip"><rect width="20" height="20" fill="white"/></clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
        {/* Disclaimer */}
        <p style={{
          fontFamily: sf, fontSize: 11, color: "#727679",
          lineHeight: "14px", textAlign: "center",
          margin: "8px 0 0", width: 348,
        }}>
          AI can make mistakes.{"  "}Consider checking important information for accuracy.
        </p>
      </div>
    </>
  );
}

// ─── Compare Versions interactive overlay ────────────────────────────────────
// Panel visual origin on canvas: left=17, top=68
// Dropdown button positions (canvas-absolute):
//   File:       left=240, top=194, w=224, h=35
//   Left agent: left=240, top=266, w=224, h=34
//   Right agent: left=569, top=266, w=223, h=34
//
// Each DropBtn lays a solid white backing (z=14) to fully occlude the static
// base import's chevron, then draws its own button + single animated chevron
// on top (z=15). This prevents the "duplicate icon" artifact.
function CompareVersionsOverlay({
  fileVal, setFileVal,
  leftVal, setLeftVal,
  rightVal, setRightVal,
  compareRan, onRunComparison,
}: {
  fileVal: string; setFileVal: (v: string) => void;
  leftVal: string; setLeftVal: (v: string) => void;
  rightVal: string; setRightVal: (v: string) => void;
  compareRan: boolean; onRunComparison: () => void;
}) {
  const sf = "system-ui,-apple-system,sans-serif";
  const inter = "Inter,system-ui,sans-serif";
  const [openMenu, setOpenMenu] = useState<"file" | "left" | "right" | null>(null);

  const FILE_OPTIONS   = ["Set #1"];
  const AGENT_OPTIONS  = ["Baseline Agent", "Version 2 Agent"];

  // Down-pointing chevron V  (animates to ∧ when open via rotate:180)
  const Chevron = ({ open }: { open: boolean }) => (
    <motion.div
      animate={{ rotate: open ? 180 : 0 }}
      transition={{ duration: 0.22, ease: "easeInOut" }}
      style={{ display: "flex", transformOrigin: "50% 50%", flexShrink: 0 }}
    >
      <svg width="11" height="7" viewBox="0 0 11 7" fill="none">
        <path d="M1 1L5.5 6L10 1" stroke="#181825" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </motion.div>
  );

  function DropBtn({
    id, left, top, width, height, value, placeholder, options, onSelect,
  }: {
    id: "file" | "left" | "right";
    left: number; top: number; width: number; height: number;
    value: string; placeholder: string; options: string[];
    onSelect: (v: string) => void;
  }) {
    const isOpen = openMenu === id;
    const hasValue = value !== placeholder;
    return (
      <>
        {/* Solid white backing — fully occludes static base chevron */}
        <div style={{
          position: "absolute", left, top, width, height,
          background: "white", borderRadius: 6, zIndex: 14,
        }} />

        {/* Interactive button with single animated chevron */}
        <div
          onClick={() => setOpenMenu(isOpen ? null : id)}
          style={{
            position: "absolute", left, top, width, height,
            background: "rgba(153,180,208,0.10)", borderRadius: 6,
            border: `1px solid ${(isOpen || hasValue) ? "#0e6ff9" : "transparent"}`,
            display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "0 9px", cursor: "pointer", zIndex: 15,
            boxSizing: "border-box",
          }}
        >
          <span style={{
            fontFamily: inter, fontSize: 14, color: "#181825",
            lineHeight: "18px", whiteSpace: "nowrap",
          }}>
            {value}
          </span>
          <Chevron open={isOpen} />
        </div>

        {/* Dropdown menu */}
        {isOpen && (
          <>
            <div onClick={() => setOpenMenu(null)} style={{ position: "absolute", inset: 0, zIndex: 16 }} />
            <div style={{
              position: "absolute", left, top: top + height + 3,
              width, background: "white", borderRadius: 8,
              boxShadow: "0px 3px 5px rgba(24,24,37,0.2)",
              padding: "6px 4px", zIndex: 17,
            }}>
              {options.map((opt) => (
                <div
                  key={opt}
                  onClick={() => { onSelect(opt); setOpenMenu(null); }}
                  style={{
                    height: 34, paddingLeft: 12,
                    display: "flex", alignItems: "center",
                    cursor: "pointer", borderRadius: 4,
                    fontFamily: sf, fontSize: 14, color: "#181825",
                    lineHeight: "20px", whiteSpace: "nowrap",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.background = "#f5f5f8")}
                  onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                >
                  {opt}
                </div>
              ))}
            </div>
          </>
        )}
      </>
    );
  }

  const allSelected = fileVal !== "Select File" && leftVal !== "--" && rightVal !== "--";
  // "Run Comparison" button: panel-relative left=1075 top=95 → canvas (1092, 163)
  const RUN_LEFT = 1092, RUN_TOP = 163, RUN_W = 140, RUN_H = 26;

  return (
    <>
      <DropBtn id="file"  left={240} top={194} width={224} height={35} value={fileVal}  placeholder="Select File" options={FILE_OPTIONS}  onSelect={setFileVal}  />
      <DropBtn id="left"  left={240} top={266} width={224} height={34} value={leftVal}  placeholder="--"          options={AGENT_OPTIONS} onSelect={setLeftVal}  />
      <DropBtn id="right" left={569} top={266} width={223} height={34} value={rightVal} placeholder="--"          options={AGENT_OPTIONS} onSelect={setRightVal} />

      {/* "Run Comparison" button overlay — active when all selected, dimmed after run */}
      {allSelected && (
        <>
          {/* White backing to cover static button */}
          <div style={{ position: "absolute", left: RUN_LEFT, top: RUN_TOP, width: RUN_W, height: RUN_H, background: "white", zIndex: 14 }} />
          <div
            onClick={compareRan ? undefined : onRunComparison}
            style={{
              position: "absolute", left: RUN_LEFT, top: RUN_TOP, width: RUN_W, height: RUN_H,
              background: compareRan ? "#6ea9fb" : "#0e6ff9",
              borderRadius: 6, zIndex: 15,
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: compareRan ? "default" : "pointer",
              transition: "background 0.2s",
            }}
          >
            <span style={{ fontFamily: sf, fontSize: 14, color: "white", lineHeight: "16px", whiteSpace: "nowrap" }}>
              Run Comparison
            </span>
          </div>
        </>
      )}
    </>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────
export default function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const [rightTab, setRightTab] = useState<"custom" | "column">("custom");
  const [view, setView] = useState<"macro" | "micro" | "compare">("macro");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [compareFile, setCompareFile] = useState("Select File");
  const [compareLeft, setCompareLeft] = useState("--");
  const [compareRight, setCompareRight] = useState("--");
  const [compareRan, setCompareRan] = useState(false);

  useEffect(() => {
    const update = () => {
      if (!rootRef.current) return;
      const scale = Math.min(
        window.innerWidth / DESIGN_WIDTH,
        window.innerHeight / DESIGN_HEIGHT
      );
      rootRef.current.style.transform = `scale(${scale})`;
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#fafafa]">
      <div
        ref={rootRef}
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transformOrigin: "top left",
          position: "absolute",
          inset: 0,
        }}
      >
        {/* Base view — only the central content changes */}
        {view === "micro" ? (
          <>
            <MicroView />
            {/* Back to Overview click zone */}
            <div
              onClick={() => setView("macro")}
              style={{ position: "absolute", left: 326, top: 69, width: 160, height: 28, cursor: "pointer", zIndex: 50 }}
            />
          </>
        ) : view === "compare" ? (
          <>
            {compareRan
              ? <CompareVersions4 />
              : (compareFile !== "Select File" && compareLeft !== "--" && compareRight !== "--")
                ? <CompareVersions2 />
                : <CompareVersions />
            }
            <CompareVersionsOverlay
              fileVal={compareFile} setFileVal={setCompareFile}
              leftVal={compareLeft} setLeftVal={setCompareLeft}
              rightVal={compareRight} setRightVal={setCompareRight}
              compareRan={compareRan} onRunComparison={() => setCompareRan(true)}
            />
          </>
        ) : (
          <>
            <MacroView />
            {/* Animated question list overlay */}
            <div style={{
              position: "absolute",
              left: PANEL_VIS_LEFT,
              top: PANEL_VIS_TOP + OVERLAY_PANEL_Y,
              width: PANEL_W,
              height: PANEL_H - OVERLAY_PANEL_Y,
              background: "white",
              overflow: "hidden",
              zIndex: 5,
            }}>
              <QuestionList
                expanded={expanded}
                onToggle={() => setExpanded((v) => !v)}
                onInspect={() => setView("micro")}
              />
            </div>
          </>
        )}

        {/* Baseline Agent dropdown click zone — over DropdownInput at canvas (32,10,134×26) */}
        <div
          onClick={() => setDropdownOpen(v => !v)}
          style={{ position: "absolute", left: 32, top: 10, width: 134, height: 26, cursor: "pointer", zIndex: 20 }}
        />

        {/* Dropdown overlay */}
        {dropdownOpen && (
          <>
            {/* Backdrop to close on outside click */}
            <div
              onClick={() => setDropdownOpen(false)}
              style={{ position: "absolute", inset: 0, zIndex: 19 }}
            />
            <div style={{
              position: "absolute", left: 10.56, top: 43,
              width: 155, background: "white",
              borderRadius: 8, boxShadow: "0px 3px 5px rgba(24,24,37,0.2)",
              padding: "10px 4px",
              zIndex: 21, overflow: "hidden",
            }}>
              {[
                { label: "Baseline Agent", dividerAfter: false, action: () => { setView("macro"); setCompareRan(false); } },
                { label: "Version 2 Agent", dividerAfter: true, action: () => {} },
                { label: "Compare Versions", dividerAfter: false, action: () => setView("compare") },
              ].map(({ label, dividerAfter, action }, i) => (
                <div key={i}>
                  <div
                    onClick={() => { action(); setDropdownOpen(false); }}
                    style={{
                      height: 34, paddingLeft: 9, display: "flex", alignItems: "center",
                      cursor: "pointer", fontFamily: "system-ui,-apple-system,sans-serif",
                      fontSize: 14, color: "#181825", letterSpacing: 0.28, lineHeight: "20px",
                      borderRadius: 4,
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = "#f5f5f8")}
                    onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
                  >
                    {label}
                  </div>
                  {dividerAfter && (
                    <div style={{ height: 1, background: "#d9d9d9", margin: "0 0" }} />
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {/* Unified right panel — shown on macro and micro views only */}
        {view !== "compare" && (
          <UnifiedRightPanel tab={rightTab} onTabChange={setRightTab} view={view} />
        )}
      </div>
    </div>
  );
}
