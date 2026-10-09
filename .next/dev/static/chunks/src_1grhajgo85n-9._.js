(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/motion/PlayInView.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PlayInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function PlayInView({ children, className = "", once = false, decorative = true }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [playing, setPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PlayInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "PlayInView.useEffect": ([entry])=>{
                    if (once) {
                        if (entry.isIntersecting) {
                            setPlaying(true);
                            observer.disconnect();
                        }
                    } else {
                        setPlaying(entry.isIntersecting);
                    }
                }
            }["PlayInView.useEffect"], // Seuil 0 + marge : fonctionne aussi pour les blocs plus hauts que l'écran
            {
                threshold: 0,
                rootMargin: "0px 0px -12% 0px"
            });
            observer.observe(el);
            return ({
                "PlayInView.useEffect": ()=>observer.disconnect()
            })["PlayInView.useEffect"];
        }
    }["PlayInView.useEffect"], [
        once
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        "data-playing": playing,
        className: `wv-stage ${className}`,
        "aria-hidden": decorative || undefined,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/motion/PlayInView.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
_s(PlayInView, "2ekNDAwii82FkISFBlsfBuOJfic=");
_c = PlayInView;
var _c;
__turbopack_context__.k.register(_c, "PlayInView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/tarifs/Disclosure.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Disclosure",
    ()=>Disclosure
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function Disclosure({ label, children, variant = "faq", className = "" }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Une fois ouvert, le contenu n'est plus rogné (utile pour l'en-tête collant du tableau)
    const [settled, setSettled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const id = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Disclosure.useEffect": ()=>{
            if (!open) setSettled(false);
            else if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) setSettled(true);
        }
    }["Disclosure.useEffect"], [
        open
    ]);
    const button = variant === "faq" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-expanded": open,
        "aria-controls": id,
        onClick: ()=>setOpen((o)=>!o),
        className: "w-full flex justify-between items-center gap-4 py-4 sm:py-5 text-left font-bold text-base sm:text-lg hover:text-electric transition-colors",
        children: [
            label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: `shrink-0 grid place-items-center w-8 h-8 border-2 border-electric font-serif text-xl leading-none transition-colors duration-300 ${open ? "bg-electric text-white" : "text-electric"}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: `inline-block transition-transform duration-300 ${open ? "rotate-45" : ""}`,
                    children: "+"
                }, void 0, false, {
                    fileName: "[project]/src/components/tarifs/Disclosure.tsx",
                    lineNumber: 43,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/tarifs/Disclosure.tsx",
                lineNumber: 37,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tarifs/Disclosure.tsx",
        lineNumber: 29,
        columnNumber: 7
    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        "aria-expanded": open,
        "aria-controls": id,
        onClick: ()=>setOpen((o)=>!o),
        className: "mx-auto flex items-center gap-2 border-2 border-electric text-electric px-6 py-3 font-semibold tag-cut-corner hover:bg-electric hover:text-white transition-colors",
        children: [
            label,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                "aria-hidden": true,
                viewBox: "0 0 12 8",
                className: `w-3 h-2 transition-transform duration-300 ${open ? "rotate-180" : ""}`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M1 1.5l5 5 5-5",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "1.8"
                }, void 0, false, {
                    fileName: "[project]/src/components/tarifs/Disclosure.tsx",
                    lineNumber: 56,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/tarifs/Disclosure.tsx",
                lineNumber: 55,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tarifs/Disclosure.tsx",
        lineNumber: 47,
        columnNumber: 7
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: className,
        children: [
            variant === "faq" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: button
            }, void 0, false, {
                fileName: "[project]/src/components/tarifs/Disclosure.tsx",
                lineNumber: 63,
                columnNumber: 28
            }, this) : button,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                id: id,
                className: `grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`,
                onTransitionEnd: (e)=>{
                    if (e.target === e.currentTarget && open) setSettled(true);
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: open && settled ? "overflow-visible" : "overflow-hidden",
                    inert: !open,
                    children: children
                }, void 0, false, {
                    fileName: "[project]/src/components/tarifs/Disclosure.tsx",
                    lineNumber: 73,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/tarifs/Disclosure.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tarifs/Disclosure.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
_s(Disclosure, "WMW4CQSj1bXgVI+XBv1N4mexs00=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useId"]
    ];
});
_c = Disclosure;
var _c;
__turbopack_context__.k.register(_c, "Disclosure");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/tarifs/PricingExplorer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PricingExplorer",
    ()=>PricingExplorer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/site.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/tarifs.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2f$PlayInView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/motion/PlayInView.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tarifs$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/tarifs/icons.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
// Fait défiler un nombre jusqu'à sa nouvelle valeur
function useCountTo(value) {
    _s();
    const [display, setDisplay] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(value);
    const current = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(value);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useCountTo.useEffect": ()=>{
            const start = current.current;
            if (start === value) return;
            if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                current.current = value;
                setDisplay(value);
                return;
            }
            let raf = 0;
            const t0 = performance.now();
            const tick = {
                "useCountTo.useEffect.tick": (now)=>{
                    const p = Math.min(1, (now - t0) / 550);
                    const eased = 1 - Math.pow(1 - p, 3);
                    const v = Math.round(start + (value - start) * eased);
                    current.current = v;
                    setDisplay(v);
                    if (p < 1) raf = requestAnimationFrame(tick);
                }
            }["useCountTo.useEffect.tick"];
            raf = requestAnimationFrame(tick);
            return ({
                "useCountTo.useEffect": ()=>cancelAnimationFrame(raf)
            })["useCountTo.useEffect"];
        }
    }["useCountTo.useEffect"], [
        value
    ]);
    return display;
}
_s(useCountTo, "yfEvucj8y2riFTq+Z0c/v9+6FPg=");
const lgOrder = [
    "lg:order-1",
    "lg:order-2",
    "lg:order-3"
];
// Sélecteur à deux choix avec un fond qui glisse
function Segmented({ label, value, onChange, options }) {
    const second = value === options[1].value;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        role: "group",
        "aria-label": label,
        className: "relative grid grid-cols-2 bg-ink/[0.06] p-1 text-sm font-semibold w-full sm:w-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                "aria-hidden": true,
                className: `absolute top-1 bottom-1 left-1 w-[calc(50%-0.25rem)] bg-white shadow transition-transform duration-300 ease-out ${second ? "translate-x-full" : ""}`
            }, void 0, false, {
                fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            options.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    type: "button",
                    "aria-pressed": value === o.value,
                    onClick: ()=>onChange(o.value),
                    className: `relative px-3 sm:px-6 py-2.5 whitespace-nowrap transition-colors ${value === o.value ? "text-ink" : "text-ink/60 hover:text-ink"}`,
                    children: [
                        o.label,
                        o.extra && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-1.5 text-xs font-bold text-electric",
                            children: o.extra
                        }, void 0, false, {
                            fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                            lineNumber: 89,
                            columnNumber: 23
                        }, this)
                    ]
                }, o.value, true, {
                    fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                    lineNumber: 79,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
_c = Segmented;
function PlanCard({ plan, mode, commitment, emphasized, badge, index, first }) {
    _s1();
    const monthly = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["monthlyPrice"])(plan, commitment);
    const amount = mode === "monthly" ? monthly : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firstMonth"])(plan, commitment);
    const shown = useCountTo(amount);
    const titleId = `formule-${plan.id}`;
    return(// Le wrapper porte l'apparition, la carte porte la mise en avant (pas de conflit d'animation)
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `wv-once wv-fade-up ${first ? "order-first" : ""} ${lgOrder[__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["desktopOrder"].indexOf(plan.id)]}`,
        style: {
            animationDelay: `${index * 0.12}s`
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            "aria-labelledby": titleId,
            className: `relative h-full flex flex-col bg-white p-6 sm:p-7 tag-cut-corner border-2 transition-all duration-500 ease-out ${emphasized ? "border-electric shadow-xl lg:-translate-y-2" : "border-ink/10"}`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-6 mb-3",
                    children: badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "wv-badge-pop inline-block bg-lime text-ink px-2.5 py-1 text-xs font-bold uppercase tracking-wider tag-cut-corner",
                        children: badge
                    }, badge, false, {
                        fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                        lineNumber: 132,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                    lineNumber: 130,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    id: titleId,
                    className: "font-serif text-2xl font-bold text-electric",
                    children: plan.name
                }, void 0, false, {
                    fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                    lineNumber: 141,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-1 text-ink/75 lg:min-h-[3rem]",
                    children: plan.audience
                }, void 0, false, {
                    fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                    lineNumber: 144,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-5 flex items-baseline gap-1.5",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": true,
                            className: "font-serif text-[2.75rem] leading-none font-bold tabular-nums",
                            children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatEuro"])(shown)
                        }, void 0, false, {
                            fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            "aria-hidden": true,
                            className: "font-semibold",
                            children: mode === "monthly" ? "HT/mois" : "HT"
                        }, void 0, false, {
                            fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                            lineNumber: 150,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: [
                                mode === "monthly" ? `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatEuro"])(monthly)} HT par mois` : `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatEuro"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["firstMonth"])(plan, commitment))} HT le premier mois`,
                                `, ${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commitmentLabels"][commitment].note}`
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                            lineNumber: 153,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    "aria-hidden": true,
                    className: "wv-fade-in mt-2 text-sm text-ink/75 leading-snug min-h-[3.75rem]",
                    children: [
                        mode === "monthly" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                "+ ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatEuro"])(plan.setup),
                                " HT de création et mise en ligne, une seule fois"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                            lineNumber: 162,
                            columnNumber: 13
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatEuro"])(plan.setup),
                                " de création + ",
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatEuro"])(monthly),
                                " d'abonnement.",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                    fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                                    lineNumber: 166,
                                    columnNumber: 15
                                }, this),
                                "Ensuite : ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-ink",
                                    children: [
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatEuro"])(monthly),
                                        " HT/mois"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                                    lineNumber: 167,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                            lineNumber: 164,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "mt-1 flex items-center gap-1.5 font-semibold text-ink",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: `w-1.5 h-1.5 rounded-full ${commitment === "free" ? "bg-lime" : "bg-electric"}`
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                                    lineNumber: 171,
                                    columnNumber: 13
                                }, this),
                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commitmentLabels"][commitment].note
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    ]
                }, mode + commitment, true, {
                    fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                    lineNumber: 160,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                    className: "flex-1 mt-6 pt-6 border-t border-ink/10 space-y-2.5 text-[15px] leading-snug",
                    children: plan.highlights.map((point)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "flex gap-2.5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tarifs$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckIcon"], {
                                    className: "mt-0.5 w-4 h-4 shrink-0 text-electric"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                                    lineNumber: 179,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    children: point
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                                    lineNumber: 180,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, point, true, {
                            fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                            lineNumber: 178,
                            columnNumber: 13
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                    lineNumber: 176,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BOOKING_URL"],
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: `mt-7 block text-center px-5 py-3.5 font-semibold tag-cut-corner transition-colors duration-300 ${emphasized ? "bg-electric text-white hover:bg-ink" : "border-2 border-electric text-electric hover:bg-electric hover:text-white"}`,
                    children: [
                        plan.cta,
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "sr-only",
                            children: " (prise de rendez-vous, nouvel onglet)"
                        }, void 0, false, {
                            fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                            lineNumber: 196,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                    lineNumber: 185,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
            lineNumber: 124,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
        lineNumber: 120,
        columnNumber: 5
    }, this));
}
_s1(PlanCard, "umglZAiwOuB+s8wXDJYFRD4gpVE=", false, function() {
    return [
        useCountTo
    ];
});
_c1 = PlanCard;
function PricingExplorer() {
    _s2();
    const [mode, setMode] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("monthly");
    const [commitment, setCommitment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("engaged");
    const [selected, setSelected] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const recommended = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["recommendPlan"])(selected);
    const emphasizedId = recommended ?? "standard";
    const toggleNeed = (id)=>setSelected((prev)=>prev.includes(id) ? prev.filter((n)=>n !== id) : [
                ...prev,
                id
            ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
                className: "min-w-0 max-w-4xl mx-auto text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
                        className: "mx-auto text-sm font-bold uppercase tracking-[0.12em] text-ink/70 mb-3",
                        children: "Ce qui compte pour vous"
                    }, void 0, false, {
                        fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                        lineNumber: 217,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "wv-snap -mx-5 px-5 sm:mx-0 sm:px-0 flex sm:flex-wrap sm:justify-center gap-2 overflow-x-auto sm:overflow-visible",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["needs"].map((need)=>{
                            const on = selected.includes(need.id);
                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                "aria-pressed": on,
                                onClick: ()=>toggleNeed(need.id),
                                className: `shrink-0 inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium whitespace-nowrap border transition-colors duration-300 ${on ? "bg-electric border-electric text-white" : "bg-white border-ink/15 hover:border-electric"}`,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        "aria-hidden": true,
                                        className: `grid place-items-center w-4 h-4 transition-all duration-300 ${on ? "bg-lime text-ink scale-100" : "border border-ink/25 scale-90"}`,
                                        children: on && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$tarifs$2f$icons$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CheckIcon"], {
                                            className: "w-3 h-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                                            lineNumber: 239,
                                            columnNumber: 26
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                                        lineNumber: 233,
                                        columnNumber: 17
                                    }, this),
                                    need.label
                                ]
                            }, need.id, true, {
                                fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                                lineNumber: 224,
                                columnNumber: 15
                            }, this);
                        })
                    }, void 0, false, {
                        fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                        lineNumber: 220,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        "aria-live": "polite",
                        className: "mt-3 sm:mt-4 min-h-[1.5rem] text-sm sm:text-[15px] text-ink/80",
                        children: recommended ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "wv-fade-in inline-block",
                            children: [
                                "La formule ",
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                    className: "text-electric",
                                    children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlan"])(recommended).name
                                }, void 0, false, {
                                    fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                                    lineNumber: 249,
                                    columnNumber: 26
                                }, this),
                                " couvre tout ce que vous avez coché."
                            ]
                        }, recommended, true, {
                            fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                            lineNumber: 248,
                            columnNumber: 13
                        }, this) : "Cochez vos besoins : la formule qui suffit s'affiche."
                    }, void 0, false, {
                        fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                        lineNumber: 246,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                lineNumber: 216,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-5 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Segmented, {
                        label: "Durée d'engagement",
                        value: commitment,
                        onChange: setCommitment,
                        options: [
                            {
                                value: "engaged",
                                label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commitmentLabels"].engaged.toggle
                            },
                            {
                                value: "free",
                                label: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commitmentLabels"].free.toggle,
                                extra: `+${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NO_COMMITMENT_SURCHARGE"]} €`
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                        lineNumber: 259,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Segmented, {
                        label: "Affichage des prix",
                        value: mode,
                        onChange: setMode,
                        options: [
                            {
                                value: "monthly",
                                label: "Prix par mois"
                            },
                            {
                                value: "first",
                                label: "Premier mois"
                            }
                        ]
                    }, void 0, false, {
                        fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                lineNumber: 258,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$motion$2f$PlayInView$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                once: true,
                decorative: false,
                className: "mt-6 sm:mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:items-stretch",
                children: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mobileOrder"].map((id, i)=>{
                    const plan = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$tarifs$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPlan"])(id);
                    const isRecommended = recommended === id;
                    const badge = isRecommended ? "Conseillé pour vous" : !recommended && plan.featured ? plan.featured : null;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PlanCard, {
                        plan: plan,
                        mode: mode,
                        commitment: commitment,
                        index: i,
                        emphasized: emphasizedId === id,
                        first: isRecommended,
                        badge: badge
                    }, id, false, {
                        fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                        lineNumber: 286,
                        columnNumber: 13
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
                lineNumber: 280,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/tarifs/PricingExplorer.tsx",
        lineNumber: 214,
        columnNumber: 5
    }, this);
}
_s2(PricingExplorer, "/Mar7x1nMoFLI6FMjo7irjnSlzM=");
_c2 = PricingExplorer;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "Segmented");
__turbopack_context__.k.register(_c1, "PlanCard");
__turbopack_context__.k.register(_c2, "PricingExplorer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/tarifs/icons.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CheckIcon",
    ()=>CheckIcon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function CheckIcon({ className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 16 16",
        className: className,
        "aria-hidden": true,
        focusable: "false",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M3 8.5l3.2 3.2L13 4.8",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "2.2",
            strokeLinecap: "square"
        }, void 0, false, {
            fileName: "[project]/src/components/tarifs/icons.tsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/tarifs/icons.tsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = CheckIcon;
var _c;
__turbopack_context__.k.register(_c, "CheckIcon");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Informations partagées par plusieurs pages du site.
__turbopack_context__.s([
    "BOOKING_URL",
    ()=>BOOKING_URL,
    "SITE_URL",
    ()=>SITE_URL
]);
const SITE_URL = "https://webvibes.fr";
const BOOKING_URL = "https://webvibes.zohobookings.eu/#/webvibes";
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/tarifs.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Tarifs WebVibes : seul fichier à modifier pour changer un prix, une formule,
// une ligne du comparatif ou une réponse de la FAQ. La mise en page lit ces données.
// Tous les montants sont en euros hors taxes.
__turbopack_context__.s([
    "NO_COMMITMENT_SURCHARGE",
    ()=>NO_COMMITMENT_SURCHARGE,
    "TODO",
    ()=>TODO,
    "commitmentLabels",
    ()=>commitmentLabels,
    "comparison",
    ()=>comparison,
    "desktopOrder",
    ()=>desktopOrder,
    "faq",
    ()=>faq,
    "firstMonth",
    ()=>firstMonth,
    "formatEuro",
    ()=>formatEuro,
    "getPlan",
    ()=>getPlan,
    "includedEverywhere",
    ()=>includedEverywhere,
    "legalNotice",
    ()=>legalNotice,
    "mobileOrder",
    ()=>mobileOrder,
    "monthlyPrice",
    ()=>monthlyPrice,
    "needs",
    ()=>needs,
    "plans",
    ()=>plans,
    "recommendPlan",
    ()=>recommendPlan
]);
const plans = [
    {
        id: "essentiel",
        name: "Essentiel",
        audience: "Pour être trouvé et joignable.",
        monthly: 89,
        setup: 390,
        highlights: [
            "Site jusqu'à 3 pages",
            "Carte, horaires, bouton d'appel",
            "Référencement de base",
            "1 modification par mois"
        ],
        points: [
            "Site jusqu'à 3 pages : accueil, carte, infos pratiques",
            "Carte, horaires, plan d'accès, bouton d'appel",
            "Réservation par téléphone ou lien vers votre outil actuel",
            "Référencement de base : optimisation technique, vitesse, balises",
            "1 modification de contenu par mois"
        ],
        cta: "Parler de l'Essentiel"
    },
    {
        id: "standard",
        name: "Standard",
        audience: "Pour remplir la salle grâce à Google.",
        monthly: 119,
        setup: 590,
        featured: "Le plus choisi",
        highlights: [
            "Site jusqu'à 5 pages + galerie photos",
            "Demandes de réservation en ligne",
            "Fiche Google et avis mis en avant",
            "2 modifications par mois"
        ],
        points: [
            "Tout l'Essentiel, avec un site jusqu'à 5 pages et une galerie photos",
            "Formulaire de demande de réservation",
            "Création ou optimisation de votre fiche Google",
            "Référencement local : votre cuisine + votre ville",
            "Vos avis Google mis en avant sur le site",
            "2 modifications de contenu par mois"
        ],
        cta: "Parler du Standard"
    },
    {
        id: "premium",
        name: "Premium",
        audience: "Pour les établissements qui veulent le maximum.",
        monthly: 169,
        setup: 890,
        highlights: [
            "Site jusqu'à 8 pages, en français et en anglais",
            "Événements, privatisation, menus de saison",
            "Rapport de référencement chaque mois",
            "4 modifications par mois, en priorité"
        ],
        points: [
            "Tout le Standard, avec un site jusqu'à 8 pages",
            "Site en 2 langues (français + anglais)",
            "Pages événements, privatisation, menus de saison",
            "Carte mise à jour sans limite",
            "Suivi du référencement et rapport chaque mois",
            "4 modifications de contenu par mois, traitées en priorité"
        ],
        cta: "Parler du Premium"
    }
];
const mobileOrder = [
    "standard",
    "essentiel",
    "premium"
];
const desktopOrder = [
    "essentiel",
    "standard",
    "premium"
];
const needs = [
    {
        id: "trouve",
        label: "Carte et horaires",
        plan: "essentiel"
    },
    {
        id: "reservation",
        label: "Réservations en ligne",
        plan: "standard"
    },
    {
        id: "google",
        label: "Être vu sur Google",
        plan: "standard"
    },
    {
        id: "photos",
        label: "Galerie photos",
        plan: "standard"
    },
    {
        id: "anglais",
        label: "Site en anglais",
        plan: "premium"
    },
    {
        id: "evenements",
        label: "Événements",
        plan: "premium"
    }
];
const rank = {
    essentiel: 0,
    standard: 1,
    premium: 2
};
function recommendPlan(selected) {
    let best = null;
    for (const need of needs){
        if (selected.includes(need.id) && (!best || rank[need.plan] > rank[best])) best = need.plan;
    }
    return best;
}
const includedEverywhere = [
    "Création faite pour vous",
    "Site adapté au téléphone",
    "Hébergement",
    "Nom de domaine",
    "Connexion sécurisée (HTTPS)",
    "Maintenance technique"
];
const legalNotice = "Tarifs hors taxes, réservés aux professionnels.";
const comparison = [
    {
        title: "Votre site",
        rows: [
            {
                label: "Nombre de pages",
                values: {
                    essentiel: "Jusqu'à 3",
                    standard: "Jusqu'à 5",
                    premium: "Jusqu'à 8"
                }
            },
            {
                label: "Carte, horaires, plan d'accès, bouton d'appel",
                values: {
                    essentiel: true,
                    standard: true,
                    premium: true
                }
            },
            {
                label: "Galerie photos",
                values: {
                    essentiel: false,
                    standard: true,
                    premium: true
                }
            },
            {
                label: "Pages événements, privatisation, menus de saison",
                values: {
                    essentiel: false,
                    standard: false,
                    premium: true
                }
            },
            {
                label: "Langues",
                values: {
                    essentiel: "Français",
                    standard: "Français",
                    premium: "Français + anglais"
                }
            }
        ]
    },
    {
        title: "Réservation",
        rows: [
            {
                label: "Par téléphone ou lien vers votre outil actuel",
                values: {
                    essentiel: true,
                    standard: true,
                    premium: true
                }
            },
            {
                label: "Formulaire de demande de réservation",
                values: {
                    essentiel: false,
                    standard: true,
                    premium: true
                },
                note: "Le formulaire envoie une demande : c'est vous qui la confirmez au client. Il indique comment les données sont utilisées et renvoie vers la politique de confidentialité de votre site."
            }
        ]
    },
    {
        title: "Google",
        rows: [
            {
                label: "Référencement de base (technique, vitesse, balises)",
                values: {
                    essentiel: true,
                    standard: true,
                    premium: true
                }
            },
            {
                label: "Référencement local : votre cuisine + votre ville",
                values: {
                    essentiel: false,
                    standard: true,
                    premium: true
                }
            },
            {
                label: "Création ou optimisation de votre fiche Google",
                values: {
                    essentiel: false,
                    standard: true,
                    premium: true
                }
            },
            {
                label: "Vos avis Google mis en avant sur le site",
                values: {
                    essentiel: false,
                    standard: true,
                    premium: true
                }
            },
            {
                label: "Suivi du référencement et rapport mensuel",
                values: {
                    essentiel: false,
                    standard: false,
                    premium: true
                }
            }
        ]
    },
    {
        title: "Mises à jour",
        rows: [
            {
                label: "Modifications de contenu par mois",
                values: {
                    essentiel: "1",
                    standard: "2",
                    premium: "4, en priorité"
                }
            },
            {
                label: "Carte mise à jour sans limite",
                values: {
                    essentiel: false,
                    standard: false,
                    premium: true
                }
            }
        ]
    }
];
const TODO = "[À COMPLÉTER]";
const faq = [
    {
        question: "Qu'est-ce qu'une modification de contenu ?",
        answer: [
            "C'est un changement que vous me demandez sur votre site : un plat qui change, de nouveaux horaires, une fermeture exceptionnelle, une photo à remplacer. Vous m'envoyez un message, je fais la mise à jour.",
            "Une demande peut regrouper plusieurs petits changements (ex: de nouveaux horaires + changer 2 prix). Si vous dépassez le nombre inclus dans votre formule, la modification sera reportée au mois suivant, ou facturée sur devis en cas d'urgence."
        ]
    },
    {
        question: "Que comprennent les frais de création ?",
        answer: [
            "Tout le travail du départ : la conception du site, la mise en forme de vos textes et de vos photos, puis la mise en ligne. Vous les payez une seule fois."
        ]
    },
    {
        question: "Ai-je quelque chose à faire moi-même ?",
        answer: [
            "Très peu. Au départ, vous me transmettez vos informations (carte, horaires, photos) et vous validez le site avant sa mise en ligne. Ensuite, vous m'envoyez un message quand quelque chose change. Je m'occupe du reste."
        ]
    },
    {
        question: "Puis-je changer de formule ?",
        answer: [
            "Oui, vous pouvez passer à une formule supérieure ou inférieure à tout moment. La modification prendra effet le mois suivant, sans aucuns frais de création supplémentaires."
        ]
    },
    {
        question: "Quelle est la durée d'engagement ?",
        answer: [
            "L'engagement initial est de 12 mois (ce qui vous donne accès au tarif affiché). Vous pouvez aussi opter pour une formule sans engagement pour 10 € HT supplémentaires par mois, résiliable à tout moment."
        ]
    }
];
const NO_COMMITMENT_SURCHARGE = 10; // € HT par mois
const commitmentLabels = {
    engaged: {
        toggle: "Engagement 12 mois",
        note: "Avec engagement de 12 mois"
    },
    free: {
        toggle: "Sans engagement",
        note: "Sans engagement, résiliable à tout moment"
    }
};
const monthlyPrice = (plan, commitment = "engaged")=>plan.monthly + (commitment === "free" ? NO_COMMITMENT_SURCHARGE : 0);
const firstMonth = (plan, commitment = "engaged")=>monthlyPrice(plan, commitment) + plan.setup;
const formatEuro = (amount)=>`${new Intl.NumberFormat("fr-FR", {
        maximumFractionDigits: 0
    }).format(amount)} €`;
const getPlan = (id)=>plans.find((p)=>p.id === id);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_1grhajgo85n-9._.js.map