(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [565],
    {
        8399: function (e, a, t) {
            Promise.resolve().then(t.bind(t, 2129));
        },
        2129: function (e, a, t) {
            "use strict";
            t.r(a),
                t.d(a, {
                    default: function () {
                        return eb;
                    },
                });
            var s = t(7437),
                r = t(2265),
                n = t(3731),
                l = t(8667);
            let o = ["833763925857674"];
            var i = () => (
                    (0, r.useEffect)(() => {
                        o.forEach((e, a) => {
                            window.fbq && window.fbq("track", "PageView", {}, "pixel".concat(a + 1));
                        });
                    }, []),
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            o.map((e, a) =>
                                (0, s.jsx)(
                                    l.default,
                                    {
                                        id: "fb-pixel-".concat(a + 1),
                                        strategy: "afterInteractive",
                                        dangerouslySetInnerHTML: {
                                            __html: "\n              !function(f,b,e,v,n,t,s)\n              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n              n.callMethod.apply(n,arguments):n.queue.push(arguments)};\n              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n              n.queue=[];t=b.createElement(e);t.async=!0;\n              t.src=v;s=b.getElementsByTagName(e)[0];\n              s.parentNode.insertBefore(t,s)}\n              (window, document,'script','https://connect.facebook.net/en_US/fbevents.js');\n              fbq('init', '"
                                                .concat(e, "', {}, 'pixel")
                                                .concat(a + 1, "');\n            "),
                                        },
                                    },
                                    "fb-pixel-".concat(a + 1)
                                )
                            ),
                            (0, s.jsx)(l.default, {
                                id: "fb-pixel-event",
                                strategy: "afterInteractive",
                                dangerouslySetInnerHTML: {
                                    __html: "\n            window.addEventListener('load', function() {\n              ".concat(
                                        o
                                            .map((e, a) => "fbq('track', 'PageView', {}, 'pixel".concat(a + 1, "');"))
                                            .join("\n"),
                                        "\n            });\n          "
                                    ),
                                },
                            }),
                        ],
                    })
                ),
                c = t(4898),
                d = t(8632),
                m = t(7863),
                u = t(3869);
            let x = (0, r.memo)(() => {
                let { htmlBlock: e, scriptUrl: a } = (0, u.S)(
                    '<vturb-smartplayer id="vid-69879375596ea26e9f99e06e" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer> <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/beb06ebc-0219-4b97-b88f-8ccab6eb2442/players/69879375596ea26e9f99e06e/v4/player.js", s.async=!0,document.head.appendChild(s); </script>'
                );
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)("div", { dangerouslySetInnerHTML: { __html: e } }),
                        (0, s.jsx)(l.default, { type: "text/javascript", src: a, async: !0 }),
                    ],
                });
            });
            function p() {
                let { setPagePresell: e } = (0, c.S)(),
                    [a, t] = (0, r.useState)(!1),
                    { cleanId: n } = (0, u.S)(
                        '<vturb-smartplayer id="vid-69879375596ea26e9f99e06e" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer> <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/beb06ebc-0219-4b97-b88f-8ccab6eb2442/players/69879375596ea26e9f99e06e/v4/player.js", s.async=!0,document.head.appendChild(s); </script>'
                    );
                return (
                    (0, r.useEffect)(() => {
                        let e = parseInt("424") || 0,
                            a = "true" === new URLSearchParams(window.location.search).get("nodelay"),
                            s = () => {
                                t(!0);
                            };
                        a &&
                            (s(),
                            localStorage.setItem("".concat(n, "-resume"), e.toString()),
                            localStorage.setItem("displayHiddenElements-".concat(n), "true"));
                        let r = document.querySelector("vturb-smartplayer");
                        null == r ||
                            r.addEventListener("player:ready", function () {
                                r.displayHiddenElements(e, [], {
                                    persist: !0,
                                    callback: () => {
                                        s();
                                    },
                                });
                            });
                    }, []),
                    (0, r.useEffect)(() => {
                        (0, m.v)(m.u.front, "vsl");
                    }, []),
                    (0, s.jsxs)("main", {
                        className: "px-mobile flex-1 flex flex-col gap-2.5 pb-16 bg-black",
                        children: [
                            (0, s.jsx)(x, {}),
                            a &&
                                (0, s.jsx)(d.K, {
                                    variant: "primary",
                                    onClick: () => e("surveys"),
                                    className: "max-w-[300px]",
                                    children: "CLIQUE AQUI PARA SABER MAIS",
                                }),
                        ],
                    })
                );
            }
            function f(e) {
                let { currentProgress: a, maximumProgress: t, curveExponent: r } = e;
                return (0, s.jsx)("div", {
                    className: "px-mobile flex items-center gap-1.5",
                    children: (0, s.jsx)("div", {
                        className: "w-full bg-black/10 rounded-full overflow-hidden",
                        children: (0, s.jsx)("div", {
                            className: "bg-black h-2 transition-all duration-700 ease-in-out",
                            style: { width: "".concat(100 * Math.min(1 - Math.pow(1 - a / t, r), 100), "%") },
                        }),
                    }),
                });
            }
            x.displayName = "VslMemoized";
            var h = t(6478),
                g = t(3448);
            function j(e) {
                let { ...a } = e;
                return (0, s.jsx)("svg", {
                    "aria-hidden": "true",
                    width: 12,
                    height: 12,
                    viewBox: "0 0 256 512",
                    ...a,
                    children: (0, s.jsx)("path", {
                        fill: "currentColor",
                        d: "M17.525 36.465l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L205.947 256 10.454 451.494c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l211.051-211.05c4.686-4.686 4.686-12.284 0-16.971L34.495 36.465c-4.686-4.687-12.284-4.687-16.97 0z",
                    }),
                });
            }
            let v = { primary: "border-[6px]", secondary: "border" };
            function b(e) {
                let { variant: a, className: t, children: r, type: n = "button", ...l } = e;
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsxs)("button", {
                        type: n,
                        className: (0, g.cn)(
                            "group p-3 min-h-14 flex items-center gap-4 justify-between text-left cursor-pointer font-medium leading-tight transition-all duration-200 border-black/50 shadow-lg rounded-2xl select-none bg-black/5 data-[active=true]:border-black data-[active=true]:scale-[1.01] lg:hover:border-black lg:hover:scale-[1.01]",
                            v[a],
                            t
                        ),
                        ...l,
                        children: [
                            r,
                            (0, s.jsx)("div", {
                                className:
                                    "size-6 flex-shrink-0 flex items-center justify-center rounded-full bg-white transition-all duration-200 group-data-[active=true]:bg-black",
                                children: (0, s.jsx)(j, {
                                    className:
                                        "flex-shrink-0 text-black transition-all duration-200 group-data-[active=true]:text-white",
                                }),
                            }),
                        ],
                    }),
                });
            }
            let y = [
                "Ganhar milh\xf5es e mudar de vida completamente",
                "Conquistar de 50 a 100 mil para quitar d\xedvidas",
                "Fazer uma renda extra de 5 a 10 mil por m\xeas",
                "Apenas divers\xe3o, sem expectativas",
            ];
            function N(e) {
                let { answer: a, onAnswer: t, onStep: r } = e;
                return (0, s.jsxs)("section", {
                    className: "space-y-8",
                    children: [
                        (0, s.jsxs)("div", {
                            className: "space-y-3",
                            children: [
                                (0, s.jsx)("h1", {
                                    className: "text-xl leading-tight font-black",
                                    children:
                                        'A ex-BBB Paulinha ganhou mais de 50 vezes. Guilhermino, de PE, ganhou 70 vezes. O matem\xe1tico "Munir P\xe9 Quente" acertou 46 vezes.',
                                }),
                                (0, s.jsx)("p", {
                                    children: (0, s.jsx)("em", {
                                        children:
                                            "Se a loteria fosse puramente sorte, como voc\xea explica isso? A matem\xe1tica n\xe3o bate.",
                                    }),
                                }),
                                (0, s.jsx)("p", {
                                    children:
                                        "A verdade que a Caixa esconde: Um jogo criado por humanos PODE SIM ser decodificado.",
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: "space-y-4",
                            children: [
                                (0, s.jsx)("h2", {
                                    className: "text-xl leading-tight font-black",
                                    children: "Qual seu principal objetivo ao jogar na loteria?",
                                }),
                                (0, s.jsx)("div", {
                                    className: "flex flex-col gap-2",
                                    children: y.map((e) =>
                                        (0, s.jsx)(
                                            b,
                                            {
                                                variant: "primary",
                                                "data-active": a === e ? "true" : "false",
                                                onClick: () => {
                                                    t("step-1", e),
                                                        setTimeout(() => {
                                                            r((e) => e + 1);
                                                        }, 200);
                                                },
                                                children: e,
                                            },
                                            e
                                        )
                                    ),
                                }),
                            ],
                        }),
                    ],
                });
            }
            let w = [
                "Nunca ganhei nada",
                "Menos de R$ 100",
                "Entre R$ 100 a R$ 1.000",
                "Entre R$ 1.000 a R$ 10.000",
                "Mais de R$ 10.000",
            ];
            function C(e) {
                let { answer: a, onAnswer: t, onStep: r } = e;
                return (0, s.jsxs)("section", {
                    className: "space-y-8",
                    children: [
                        (0, s.jsxs)("div", {
                            className: "space-y-3",
                            children: [
                                (0, s.jsx)("img", {
                                    src: "https://spyscope.online/lt/img/step-2.webp",
                                    alt: "",
                                    className: "object-contain pointer-events-none",
                                }),
                                (0, s.jsx)("p", {
                                    children: (0, s.jsx)("em", {
                                        children:
                                            "Enquanto voc\xea queima dinheiro h\xe1 anos, pessoas comuns est\xe3o faturando milhares toda semana usando ci\xeancia ao inv\xe9s de sorte.",
                                    }),
                                }),
                            ],
                        }),
                        (0, s.jsxs)("div", {
                            className: "space-y-4",
                            children: [
                                (0, s.jsx)("h2", {
                                    className: "text-xl leading-tight font-black",
                                    children: "Qual foi o maior pr\xeamio que voc\xea j\xe1 ganhou na loteria?",
                                }),
                                (0, s.jsx)("div", {
                                    className: "flex flex-col gap-2",
                                    children: w.map((e) =>
                                        (0, s.jsx)(
                                            b,
                                            {
                                                variant: "secondary",
                                                "data-active": a === e ? "true" : "false",
                                                onClick: () => {
                                                    t("step-2", e),
                                                        setTimeout(() => {
                                                            r((e) => e + 1);
                                                        }, 200);
                                                },
                                                children: e,
                                            },
                                            e
                                        )
                                    ),
                                }),
                            ],
                        }),
                    ],
                });
            }
            let k = [
                "Datas especiais (anivers\xe1rios, casamento, etc.)",
                "N\xfameros da sorte pessoais",
                "Surpresinha (aleat\xf3rio)",
                "Baseado em estat\xedsticas dos sorteios anteriores",
                "Uso algum m\xe9todo ou sistema",
            ];
            function S(e) {
                let { answer: a, onAnswer: t, onStep: r } = e;
                return (0, s.jsx)("section", {
                    className: "flex-1 flex flex-col justify-center",
                    children: (0, s.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                            (0, s.jsx)("h2", {
                                className: "text-xl leading-tight font-black",
                                children: "Como voc\xea escolhe seus n\xfameros para apostar?",
                            }),
                            (0, s.jsx)("div", {
                                className: "flex flex-col gap-2",
                                children: k.map((e) =>
                                    (0, s.jsx)(
                                        b,
                                        {
                                            variant: "secondary",
                                            "data-active": a === e ? "true" : "false",
                                            onClick: () => {
                                                t("step-3", e),
                                                    setTimeout(() => {
                                                        r((e) => e + 1);
                                                    }, 200);
                                            },
                                            children: e,
                                        },
                                        e
                                    )
                                ),
                            }),
                        ],
                    }),
                });
            }
            let D = [
                "N\xe3o Gasto Nada",
                "At\xe9 R$ 50",
                "Entre R$ 50 a R$ 100",
                "Entre R$ 100 a R$ 500",
                "Mais de R$ 500",
            ];
            function E(e) {
                let { answer: a, onAnswer: t, onStep: r } = e;
                return (0, s.jsx)("section", {
                    className: "flex-1 flex flex-col justify-center",
                    children: (0, s.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                            (0, s.jsx)("h2", {
                                className: "text-xl leading-tight font-black",
                                children: "Quanto voc\xea gasta por m\xeas com apostas na loteria?",
                            }),
                            (0, s.jsx)("div", {
                                className: "flex flex-col gap-2",
                                children: D.map((e) =>
                                    (0, s.jsx)(
                                        b,
                                        {
                                            variant: "secondary",
                                            "data-active": a === e ? "true" : "false",
                                            onClick: () => {
                                                t("step-4", e),
                                                    setTimeout(() => {
                                                        r((e) => e + 1);
                                                    }, 200);
                                            },
                                            children: e,
                                        },
                                        e
                                    )
                                ),
                            }),
                        ],
                    }),
                });
            }
            function R(e) {
                let { onStep: a } = e,
                    [t, n] = (0, r.useState)(0);
                return (
                    (0, r.useEffect)(() => {
                        let e = setInterval(() => {
                            n((a) => (a >= 100 ? (clearInterval(e), 100) : a + 1));
                        }, 50);
                        return () => clearInterval(e);
                    }, []),
                    (0, r.useEffect)(() => {
                        100 === t && a((e) => e + 1);
                    }, [t]),
                    (0, s.jsx)("section", {
                        className: "flex-1 flex flex-col justify-center",
                        children: (0, s.jsxs)("div", {
                            className: "space-y-2",
                            children: [
                                (0, s.jsxs)("div", {
                                    className: "flex items-center justify-between text-sm font-semibold",
                                    children: [
                                        (0, s.jsx)("span", { children: "Carregando..." }),
                                        (0, s.jsxs)("span", { className: "opacity-50", children: [t, "%"] }),
                                    ],
                                }),
                                (0, s.jsx)("div", {
                                    className: "w-full bg-black/10 rounded-full overflow-hidden",
                                    children: (0, s.jsx)("div", {
                                        className: "bg-black rounded-full h-3 transition-all duration-100",
                                        style: { width: "".concat(t, "%") },
                                    }),
                                }),
                                (0, s.jsx)("p", {
                                    className: "text-center",
                                    children:
                                        '"Calculando seus gastos versus seus ganhos... Os n\xfameros mostram algo CHOCANTE que voc\xea precisa ver..."',
                                }),
                            ],
                        }),
                    })
                );
            }
            let q = [
                { emoji: "\uD83D\uDCB8", message: "Pagaria todas as d\xedvidas" },
                { emoji: "\uD83D\uDE97", message: "Compraria um carro novo" },
                { emoji: "\uD83D\uDCB0", message: "Investiria o dinheiro" },
                { emoji: "\uD83C\uDFE0", message: "Realizaria o sonho da casa pr\xf3pria" },
                { emoji: "\uD83D\uDC6A", message: "Ajudaria a fam\xedlia" },
            ];
            function A(e) {
                let { answer: a, onAnswer: t, onStep: r } = e;
                return (0, s.jsx)("section", {
                    className: "flex-1 flex flex-col justify-center",
                    children: (0, s.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                            (0, s.jsx)("h2", {
                                className: "text-2xl leading-tight font-bold",
                                children:
                                    "Se voc\xea ganhasse R$ 50.000 na loteria amanh\xe3, qual seria sua primeira a\xe7\xe3o?",
                            }),
                            (0, s.jsx)("div", {
                                className: "flex flex-col gap-2",
                                children: q.map((e) =>
                                    (0, s.jsx)(
                                        b,
                                        {
                                            variant: "secondary",
                                            "data-active": a === e.message ? "true" : "false",
                                            onClick: () => {
                                                t("step-6", e.message),
                                                    setTimeout(() => {
                                                        r((e) => e + 1);
                                                    }, 200);
                                            },
                                            children: (0, s.jsxs)("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    (0, s.jsx)("span", { className: "text-4xl", children: e.emoji }),
                                                    (0, s.jsx)("span", { children: e.message }),
                                                ],
                                            }),
                                        },
                                        e.message
                                    )
                                ),
                            }),
                            (0, s.jsxs)("div", {
                                className: "text-center space-y-2",
                                children: [
                                    (0, s.jsx)("p", {
                                        children: (0, s.jsx)("span", {
                                            className: "bg-yellow-1",
                                            children: '"Seus sonhos est\xe3o mais pr\xf3ximos do que imagina...',
                                        }),
                                    }),
                                    (0, s.jsx)("p", {
                                        children: (0, s.jsx)("span", {
                                            className: "bg-yellow-1",
                                            children:
                                                'Mas h\xe1 algo que voc\xea PRECISA saber antes de continuar jogando do jeito tradicional..."',
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    }),
                });
            }
            let I = [
                "Sim, e acredito que \xe9 poss\xedvel",
                "Sim, mas acho que \xe9 sorte",
                "Sim, mas desconfio que seja golpe",
                "N\xe3o, nunca soube disso",
                "N\xe3o acredito que seja real",
            ];
            function P(e) {
                let { answer: a, onAnswer: t, onStep: r } = e;
                return (0, s.jsx)("section", {
                    className: "flex-1 flex flex-col justify-center",
                    children: (0, s.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                            (0, s.jsx)("h2", {
                                className: "text-2xl leading-tight font-bold",
                                children:
                                    "Voc\xea j\xe1 ouviu falar de pessoas que ganharam na loteria mais de 10 vezes?",
                            }),
                            (0, s.jsx)("div", {
                                className: "flex flex-col gap-2",
                                children: I.map((e) =>
                                    (0, s.jsx)(
                                        b,
                                        {
                                            variant: "secondary",
                                            "data-active": a === e ? "true" : "false",
                                            onClick: () => {
                                                t("step-7", e),
                                                    setTimeout(() => {
                                                        r((e) => e + 1);
                                                    }, 200);
                                            },
                                            children: e,
                                        },
                                        e
                                    )
                                ),
                            }),
                        ],
                    }),
                });
            }
            let z = [
                "N\xe3o sei escolher os n\xfameros certos",
                "Gasto muito e ganho pouco",
                "N\xe3o tenho um m\xe9todo eficaz",
                "Acho que \xe9 tudo sorte mesmo",
                "Nunca pensei nisso",
            ];
            function L(e) {
                let { answer: a, onAnswer: t, onStep: r } = e;
                return (0, s.jsx)("section", {
                    className: "flex-1 flex flex-col justify-center",
                    children: (0, s.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                            (0, s.jsx)("h2", {
                                className: "text-2xl leading-tight font-bold",
                                children: "Qual seu maior obst\xe1culo para ganhar na loteria?",
                            }),
                            (0, s.jsx)("div", {
                                className: "flex flex-col gap-2",
                                children: z.map((e) =>
                                    (0, s.jsx)(
                                        b,
                                        {
                                            variant: "secondary",
                                            "data-active": a === e ? "true" : "false",
                                            onClick: () => {
                                                t("step-8", e),
                                                    setTimeout(() => {
                                                        r((e) => e + 1);
                                                    }, 200);
                                            },
                                            children: e,
                                        },
                                        e
                                    )
                                ),
                            }),
                        ],
                    }),
                });
            }
            let T = [
                "Sim, sem d\xfavida",
                "Sim, mas com garantia",
                "Talvez, dependendo da prova",
                "N\xe3o, prefiro apostar na sorte",
                "N\xe3o tenho esse dinheiro agora",
            ];
            function B(e) {
                let { answer: a, onAnswer: t, onStep: r } = e;
                return (0, s.jsx)("section", {
                    className: "flex-1 flex flex-col justify-center",
                    children: (0, s.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                            (0, s.jsx)("h2", {
                                className: "text-2xl leading-tight font-bold",
                                children:
                                    "Se existisse um m\xe9todo cient\xedfico para aumentar drasticamente suas chances de ganhar, voc\xea investiria R$147,90 para aprender?",
                            }),
                            (0, s.jsx)("div", {
                                className: "flex flex-col gap-2",
                                children: T.map((e) =>
                                    (0, s.jsx)(
                                        b,
                                        {
                                            variant: "secondary",
                                            "data-active": a === e ? "true" : "false",
                                            onClick: () => {
                                                t("step-9", e),
                                                    setTimeout(() => {
                                                        r((e) => e + 1);
                                                    }, 200);
                                            },
                                            children: e,
                                        },
                                        e
                                    )
                                ),
                            }),
                            (0, s.jsx)("p", {
                                className: "text-center",
                                children: (0, s.jsx)("span", {
                                    className: "bg-yellow-1",
                                    children:
                                        '"Sua resposta revela se voc\xea tem mentalidade de GANHADOR ou de PERDEDOR. Continue para descobrir a verdade..."',
                                }),
                            }),
                        ],
                    }),
                });
            }
            let M = [
                { emoji: "\uD83D\uDCB0", message: "Entre R$ 1.000 a R$ 5.000" },
                { emoji: "\uD83D\uDCB0", message: "Entre R$ 5.000 a R$ 15.000" },
                { emoji: "\uD83D\uDCB0", message: "Entre R$ 15.000 a R$ 50.000" },
                { emoji: "\uD83D\uDCB0", message: "Mais de R$ 50.000" },
                { emoji: "\uD83D\uDCB0", message: "Qualquer valor j\xe1 mudaria minha vida" },
            ];
            function _(e) {
                let { answer: a, onAnswer: t, onStep: r } = e;
                return (0, s.jsx)("section", {
                    className: "flex-1 flex flex-col justify-center",
                    children: (0, s.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                            (0, s.jsx)("h2", {
                                className: "text-2xl leading-tight font-bold",
                                children: "Qual seria o valor ideal para voc\xea ganhar mensalmente na loteria?",
                            }),
                            (0, s.jsx)("div", {
                                className: "flex flex-col gap-2",
                                children: M.map((e) =>
                                    (0, s.jsx)(
                                        b,
                                        {
                                            variant: "secondary",
                                            "data-active": a === e.message ? "true" : "false",
                                            onClick: () => {
                                                t("step-10", e.message),
                                                    setTimeout(() => {
                                                        r((e) => e + 1);
                                                    }, 200);
                                            },
                                            children: (0, s.jsxs)("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    (0, s.jsx)("span", { className: "text-4xl", children: e.emoji }),
                                                    (0, s.jsx)("span", { children: e.message }),
                                                ],
                                            }),
                                        },
                                        e.message
                                    )
                                ),
                            }),
                        ],
                    }),
                });
            }
            let F = [
                "Sim, totalmente aberto a mudan\xe7as",
                "Sim, mas quero ver resultados primeiro",
                "Talvez, dependendo do m\xe9todo",
                "N\xe3o, prefiro meu jeito atual",
                "N\xe3o sei responder",
            ];
            function $(e) {
                let { answer: a, onAnswer: t, onStep: r } = e;
                return (0, s.jsx)("section", {
                    className: "flex-1 flex flex-col justify-center",
                    children: (0, s.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                            (0, s.jsx)("h2", {
                                className: "text-2xl leading-tight font-bold",
                                children:
                                    "Voc\xea estaria disposto a seguir um m\xe9todo testado e aprovado, mesmo que seja diferente do que voc\xea faz hoje?",
                            }),
                            (0, s.jsx)("div", {
                                className: "flex flex-col gap-2",
                                children: F.map((e) =>
                                    (0, s.jsx)(
                                        b,
                                        {
                                            variant: "secondary",
                                            "data-active": a === e ? "true" : "false",
                                            onClick: () => {
                                                t("step-11", e),
                                                    setTimeout(() => {
                                                        r((e) => e + 1);
                                                    }, 200);
                                            },
                                            children: e,
                                        },
                                        e
                                    )
                                ),
                            }),
                        ],
                    }),
                });
            }
            let O = [
                "SIM! Quero conhecer agora",
                "Sim, mas quero ver as provas primeiro",
                "Talvez, se for gratuito",
                "N\xe3o tenho tempo agora",
                "N\xe3o me interesso",
            ];
            function U(e) {
                let { answer: a, onAnswer: t, onStep: r } = e;
                return (0, s.jsx)("section", {
                    className: "flex-1 flex flex-col justify-center",
                    children: (0, s.jsxs)("div", {
                        className: "space-y-4",
                        children: [
                            (0, s.jsx)("h2", {
                                className: "text-2xl leading-tight font-bold",
                                children:
                                    "Se eu te mostrasse pessoas comuns que ganharam milhares de reais seguindo um m\xe9todo espec\xedfico, voc\xea daria 3 minutos do seu tempo para conhecer esse sistema?",
                            }),
                            (0, s.jsx)("div", {
                                className: "flex flex-col gap-2",
                                children: O.map((e) =>
                                    (0, s.jsx)(
                                        b,
                                        {
                                            variant: "secondary",
                                            "data-active": a === e ? "true" : "false",
                                            onClick: () => {
                                                t("step-12", e),
                                                    setTimeout(() => {
                                                        r((e) => e + 1);
                                                    }, 200);
                                            },
                                            children: e,
                                        },
                                        e
                                    )
                                ),
                            }),
                        ],
                    }),
                });
            }
            function V() {
                let [e, a] = (0, r.useState)(0),
                    { setPagePresell: t } = (0, c.S)();
                return (
                    (0, r.useEffect)(() => {
                        let e = setInterval(() => {
                            a((a) => (a >= 100 ? (clearInterval(e), 100) : a + 1));
                        }, 50);
                        return () => clearInterval(e);
                    }, []),
                    (0, r.useEffect)(() => {
                        100 === e && t("vsl-pr");
                    }, [e]),
                    (0, s.jsxs)("section", {
                        className: "flex-1 flex flex-col justify-center",
                        children: [
                            (0, s.jsxs)("ul", {
                                className: "space-y-10 pb-8",
                                children: [
                                    (0, s.jsx)("li", { children: "\uD83D\uDD04 Analisando suas respostas..." }),
                                    (0, s.jsx)("li", { children: "\uD83D\uDD04 Calculando seu perfil de ganhador..." }),
                                    (0, s.jsx)("li", {
                                        children: "\uD83D\uDD04 Verificando compatibilidade com m\xe9todo premiado...",
                                    }),
                                    (0, s.jsx)("li", {
                                        children: "\uD83D\uDD04 Preparando seu resultado personalizado...",
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className: "space-y-2",
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: "flex items-center justify-between text-sm font-semibold",
                                        children: [
                                            (0, s.jsx)("span", { children: "Carregando..." }),
                                            (0, s.jsxs)("span", { className: "opacity-50", children: [e, "%"] }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        className: "w-full bg-black/10 rounded-full overflow-hidden",
                                        children: (0, s.jsx)("div", {
                                            className: "bg-black rounded-full h-3 transition-all duration-100",
                                            style: { width: "".concat(e, "%") },
                                        }),
                                    }),
                                    (0, s.jsx)("p", {
                                        className: "text-center",
                                        children:
                                            '"AGUARDE... Estamos processando suas 11 respostas atrav\xe9s de nosso algoritmo exclusivo que j\xe1 identificou mais de 2.847 perfis de ganhadores..."',
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            }
            function G(e) {
                let { ...a } = e;
                return (0, s.jsx)("svg", {
                    "aria-hidden": "true",
                    width: 14,
                    height: 14,
                    viewBox: "0 0 448 512",
                    ...a,
                    children: (0, s.jsx)("path", {
                        fill: "currentColor",
                        d: "M229.9 473.899l19.799-19.799c4.686-4.686 4.686-12.284 0-16.971L94.569 282H436c6.627 0 12-5.373 12-12v-28c0-6.627-5.373-12-12-12H94.569l155.13-155.13c4.686-4.686 4.686-12.284 0-16.971L229.9 38.101c-4.686-4.686-12.284-4.686-16.971 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971L212.929 473.9c4.686 4.686 12.284 4.686 16.971-.001z",
                    }),
                });
            }
            function H() {
                return (0, s.jsxs)("svg", {
                    viewBox: "0 0 24 24",
                    className: "h-10 w-10 clover-glow",
                    style: { filter: "drop-shadow(0 0 10px hsl(var(--gold)))", fill: 'url("#cloverGradient")' },
                    children: [
                        (0, s.jsxs)("defs", {
                            children: [
                                (0, s.jsxs)("linearGradient", {
                                    id: "cloverGradient",
                                    x1: "0%",
                                    y1: "0%",
                                    x2: "100%",
                                    y2: "100%",
                                    children: [
                                        (0, s.jsx)("stop", { offset: "0%", stopColor: "hsl(45 100% 65%)" }),
                                        (0, s.jsx)("stop", { offset: "50%", stopColor: "hsl(45 95% 55%)" }),
                                        (0, s.jsx)("stop", { offset: "100%", stopColor: "hsl(45 85% 45%)" }),
                                    ],
                                }),
                                (0, s.jsxs)("filter", {
                                    id: "clover3d",
                                    children: [
                                        (0, s.jsx)("feGaussianBlur", { in: "SourceAlpha", stdDeviation: 1 }),
                                        (0, s.jsx)("feOffset", { dx: 1, dy: 1, result: "offset" }),
                                        (0, s.jsx)("feComponentTransfer", {
                                            children: (0, s.jsx)("feFuncA", { type: "linear", slope: "0.3" }),
                                        }),
                                        (0, s.jsxs)("feMerge", {
                                            children: [
                                                (0, s.jsx)("feMergeNode", {}),
                                                (0, s.jsx)("feMergeNode", { in: "SourceGraphic" }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        (0, s.jsxs)("g", {
                            filter: "url(#clover3d)",
                            children: [
                                (0, s.jsx)("path", {
                                    d: "M12 2C10 2 8.5 3.5 8.5 5.5C8.5 6.5 9 7.5 10 8C9 8.5 8.5 9.5 8.5 10.5C8.5 12.5 10 14 12 14C14 14 15.5 12.5 15.5 10.5C15.5 9.5 15 8.5 14 8C15 7.5 15.5 6.5 15.5 5.5C15.5 3.5 14 2 12 2Z",
                                }),
                                (0, s.jsx)("path", {
                                    d: "M2 12C2 10 3.5 8.5 5.5 8.5C6.5 8.5 7.5 9 8 10C8.5 9 9.5 8.5 10.5 8.5C12.5 8.5 14 10 14 12C14 14 12.5 15.5 10.5 15.5C9.5 15.5 8.5 15 8 14C7.5 15 6.5 15.5 5.5 15.5C3.5 15.5 2 14 2 12Z",
                                }),
                                (0, s.jsx)("path", {
                                    d: "M12 22C14 22 15.5 20.5 15.5 18.5C15.5 17.5 15 16.5 14 16C15 15.5 15.5 14.5 15.5 13.5C15.5 11.5 14 10 12 10C10 10 8.5 11.5 8.5 13.5C8.5 14.5 9 15.5 10 16C9 16.5 8.5 17.5 8.5 18.5C8.5 20.5 10 22 12 22Z",
                                }),
                                (0, s.jsx)("path", {
                                    d: "M22 12C22 14 20.5 15.5 18.5 15.5C17.5 15.5 16.5 15 16 14C15.5 15 14.5 15.5 13.5 15.5C11.5 15.5 10 14 10 12C10 10 11.5 8.5 13.5 8.5C14.5 8.5 15.5 9 16 10C16.5 9 17.5 8.5 18.5 8.5C20.5 8.5 22 10 22 12Z",
                                }),
                            ],
                        }),
                    ],
                });
            }
            let Q = {
                "step-1": "",
                "step-2": "",
                "step-3": "",
                "step-4": "",
                "step-6": "",
                "step-7": "",
                "step-8": "",
                "step-9": "",
                "step-10": "",
                "step-11": "",
                "step-12": "",
            };
            function Z(e, a) {
                return "SET_ANSWER" === a.type ? { ...e, [a.step]: a.value } : e;
            }
            function W(e) {
                let { step: a, setStep: t } = e;
                return (0, s.jsxs)("header", {
                    className: "relative",
                    children: [
                        (0, s.jsx)("button", {
                            type: "button",
                            onClick: () => t((e) => e - 1),
                            className: (0, g.cn)("absolute top-3 left-4", a < 2 && "invisible pointer-events-none"),
                            children: (0, s.jsx)(G, {}),
                        }),
                        (0, s.jsxs)("div", {
                            className: "py-7 flex justify-center items-center gap-3",
                            children: [
                                (0, s.jsx)(H, {}),
                                (0, s.jsx)("div", {
                                    className: "text-3xl font-black tracking-wider",
                                    children: (0, s.jsx)("span", {
                                        className:
                                            "bg-gradient-to-r from-black to-green-6 bg-clip-text text-transparent",
                                        style: {
                                            fontFamily: 'Impact, "Arial Black", sans-serif',
                                            textShadow: "rgba(0, 0, 0, 0.3) 2px 2px 4px",
                                            letterSpacing: 2,
                                        },
                                        children: "LOTOAPP",
                                    }),
                                }),
                            ],
                        }),
                    ],
                });
            }
            function J() {
                var e;
                let [a, t] = (0, r.useState)(0),
                    [n, l] = (0, r.useReducer)(Z, Q),
                    o = (e, a) => {
                        l({ type: "SET_ANSWER", step: e, value: a });
                    },
                    i = {
                        1: (0, s.jsx)(N, { answer: n["step-1"], onAnswer: o, onStep: t }),
                        2: (0, s.jsx)(C, { answer: n["step-2"], onAnswer: o, onStep: t }),
                        3: (0, s.jsx)(S, { answer: n["step-3"], onAnswer: o, onStep: t }),
                        4: (0, s.jsx)(E, { answer: n["step-4"], onAnswer: o, onStep: t }),
                        5: (0, s.jsx)(R, { onStep: t }),
                        6: (0, s.jsx)(A, { answer: n["step-6"], onAnswer: o, onStep: t }),
                        7: (0, s.jsx)(P, { answer: n["step-7"], onAnswer: o, onStep: t }),
                        8: (0, s.jsx)(L, { answer: n["step-8"], onAnswer: o, onStep: t }),
                        9: (0, s.jsx)(B, { answer: n["step-9"], onAnswer: o, onStep: t }),
                        10: (0, s.jsx)(_, { answer: n["step-10"], onAnswer: o, onStep: t }),
                        11: (0, s.jsx)($, { answer: n["step-11"], onAnswer: o, onStep: t }),
                        12: (0, s.jsx)(U, { answer: n["step-12"], onAnswer: o, onStep: t }),
                        13: (0, s.jsx)(V, {}),
                    };
                (0, r.useEffect)(() => {
                    t((e) => e + 1);
                }, []),
                    (0, r.useEffect)(() => {
                        0 !== a && (0, m.v)(m.u.front, "step-".concat(a));
                    }, [a]);
                let c = null !== (e = i[a]) && void 0 !== e ? e : null;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)(W, { step: a, setStep: t }),
                        (0, s.jsx)(f, { currentProgress: a, maximumProgress: 13, curveExponent: 1 }),
                        (0, s.jsx)(
                            h.E.main,
                            {
                                initial: { opacity: 0 },
                                animate: { opacity: 1 },
                                transition: { duration: 0.2 },
                                className: "px-mobile py-8 flex-1 flex flex-col",
                                children: c,
                            },
                            "page-".concat(a)
                        ),
                    ],
                });
            }
            let K = (0, r.memo)(() => {
                let { htmlBlock: e, scriptUrl: a } = (0, u.S)(
                    '<vturb-smartplayer id="vid-69879362eeb5bbc0e5ed38b0" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer> <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/beb06ebc-0219-4b97-b88f-8ccab6eb2442/players/69879362eeb5bbc0e5ed38b0/v4/player.js", s.async=!0,document.head.appendChild(s); </script>'
                );
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        (0, s.jsx)("div", { dangerouslySetInnerHTML: { __html: e } }),
                        (0, s.jsx)(l.default, { type: "text/javascript", src: a, async: !0 }),
                    ],
                });
            });
            function Y() {
                let [e, a] = (0, r.useState)(!1),
                    { cleanId: t } = (0, u.S)(
                        '<vturb-smartplayer id="vid-69879362eeb5bbc0e5ed38b0" style="display: block; margin: 0 auto; width: 100%; max-width: 400px;"></vturb-smartplayer> <script type="text/javascript"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/beb06ebc-0219-4b97-b88f-8ccab6eb2442/players/69879362eeb5bbc0e5ed38b0/v4/player.js", s.async=!0,document.head.appendChild(s); </script>'
                    );
                return (
                    (0, r.useEffect)(() => {
                        let e = parseInt("267") || 0,
                            s = "true" === new URLSearchParams(window.location.search).get("nodelay"),
                            r = () => {
                                a(!0);
                            };
                        s &&
                            (r(),
                            localStorage.setItem("".concat(t, "-resume"), e.toString()),
                            localStorage.setItem("displayHiddenElements-".concat(t), "true"));
                        let n = document.querySelector("vturb-smartplayer");
                        null == n ||
                            n.addEventListener("player:ready", function () {
                                n.displayHiddenElements(e, [], {
                                    persist: !0,
                                    callback: () => {
                                        r();
                                    },
                                });
                            });
                    }, []),
                    (0, r.useEffect)(() => {
                        (0, m.v)(m.u.front, "vsl-pr");
                    }, []),
                    (0, s.jsxs)("main", {
                        className: "px-mobile flex-1 flex flex-col gap-2.5 pb-16 bg-black",
                        children: [
                            (0, s.jsx)(K, {}),
                            e &&
                                (0, s.jsx)(d.V, {
                                    href: "https://pay.cakto.com.br/ijrcajj_757625",
                                    className:
                                        "max-w-[240px] mx-auto w-full px-3 py-4 flex items-center justify-center gap-2 text-white leading-none font-semibold text-center rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed bg-green-1 enabled:animate-scale-down-button",
                                    children: "GARANTIR A MINHA VAGA",
                                }),
                            (0, s.jsx)(l.default, {
                                id: "utmify",
                                src: "https://cdn.utmify.com.br/scripts/utms/latest.js",
                                async: !0,
                                defer: !0,
                            }),
                        ],
                    })
                );
            }
            K.displayName = "VslMemoized";
            let X = r.forwardRef((e, a) => {
                let { className: t, ...r } = e;
                return (0, s.jsx)("div", {
                    ref: a,
                    className: (0, g.cn)("rounded-xl border bg-card text-card-foreground shadow", t),
                    ...r,
                });
            });
            function ee(e) {
                let a = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
                return new Intl.NumberFormat("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                    minimumFractionDigits: a ? 2 : 0,
                    maximumFractionDigits: a ? 2 : 0,
                }).format(e);
            }
            (X.displayName = "Card"),
                (r.forwardRef((e, a) => {
                    let { className: t, ...r } = e;
                    return (0, s.jsx)("div", {
                        ref: a,
                        className: (0, g.cn)("flex flex-col space-y-1.5 p-6", t),
                        ...r,
                    });
                }).displayName = "CardHeader"),
                (r.forwardRef((e, a) => {
                    let { className: t, ...r } = e;
                    return (0, s.jsx)("div", {
                        ref: a,
                        className: (0, g.cn)("font-semibold leading-none tracking-tight", t),
                        ...r,
                    });
                }).displayName = "CardTitle"),
                (r.forwardRef((e, a) => {
                    let { className: t, ...r } = e;
                    return (0, s.jsx)("div", {
                        ref: a,
                        className: (0, g.cn)("text-sm text-muted-foreground", t),
                        ...r,
                    });
                }).displayName = "CardDescription"),
                (r.forwardRef((e, a) => {
                    let { className: t, ...r } = e;
                    return (0, s.jsx)("div", { ref: a, className: (0, g.cn)("p-6 pt-0", t), ...r });
                }).displayName = "CardContent"),
                (r.forwardRef((e, a) => {
                    let { className: t, ...r } = e;
                    return (0, s.jsx)("div", { ref: a, className: (0, g.cn)("flex items-center p-6 pt-0", t), ...r });
                }).displayName = "CardFooter");
            let ea = [
                {
                    id: "lotofacil",
                    name: "Lotof\xe1cil",
                    howToPlay: "escolher de 15 a 20 n\xfameros entre 25",
                    drawDays: "todos os dias da semana, de segunda a s\xe1bado, \xe0s 20h",
                    obs: "\xe9 a loteria mais frequente, junto com a Quina.",
                    numbersRange: { min: 1, max: 25, pick: 15 },
                    prize: 18e5,
                    backgroundImg: "https://spyscope.online/lt/img/lotofacil.png",
                    logoImg: "https://spyscope.online/lt/img/logo-lotofacil.png",
                    color: "#95018B",
                },
                {
                    id: "megasena",
                    name: "Mega-Sena",
                    howToPlay: "escolher de 6 a 15 n\xfameros entre 60",
                    drawDays: "quartas e s\xe1bados, \xe0s 20h (hor\xe1rio de Bras\xedlia)",
                    obs: "em datas especiais (como a Mega da Virada), pode haver sorteios adicionais.",
                    numbersRange: { min: 1, max: 60, pick: 6 },
                    prize: 38e6,
                    backgroundImg: "https://spyscope.online/lt/img/megasena.png",
                    logoImg: "https://spyscope.online/lt/img/logo-megasena.png",
                    color: "#20986A",
                },
                {
                    id: "lotomania",
                    name: "Lotomania",
                    howToPlay: "marcar 50 n\xfameros entre 100",
                    drawDays: "segundas, quartas e sextas, \xe0s 20h",
                    numbersRange: { min: 1, max: 100, pick: 50 },
                    prize: 16e5,
                    backgroundImg: "https://spyscope.online/lt/img/lotomania.png",
                    logoImg: "https://spyscope.online/lt/img/logo-lotomania.png",
                    color: "#E96B00",
                },
                {
                    id: "duplasena",
                    name: "Dupla Sena",
                    howToPlay:
                        "Escolher de 6 a 15 n\xfameros entre 50. A aposta participa de dois sorteios no mesmo concurso.",
                    drawDays: "ter\xe7as, quintas e s\xe1bados, \xe0s 20h (hor\xe1rio de Bras\xedlia)",
                    obs: "Em datas especiais ocorre a Dupla de P\xe1scoa, com pr\xeamio acumulado e concurso \xfanico.",
                    numbersRange: { min: 1, max: 50, pick: 6 },
                    prize: 24e5,
                    backgroundImg: "https://spyscope.online/lt/img/duplasena.png",
                    logoImg: "https://spyscope.online/lt/img/logo-duplasena.png",
                    color: "#B51F2D",
                },
                {
                    id: "diadesorte",
                    name: "Dia de Sorte",
                    howToPlay:
                        "escolher de 7 a 15 n\xfameros entre 31, al\xe9m de 1 m\xeas da sorte (de janeiro a dezembro)",
                    drawDays: "ter\xe7as, quintas e s\xe1bados, \xe0s 20h (hor\xe1rio de Bras\xedlia)",
                    obs: "paga pr\xeamios para 4 a 7 acertos, al\xe9m do acerto do m\xeas sorteado.",
                    numbersRange: { min: 1, max: 31, pick: 7 },
                    prize: 65e4,
                    backgroundImg: "https://spyscope.online/lt/img/diadesorte.png",
                    logoImg: "https://spyscope.online/lt/img/logo-diadesorte.png",
                    color: "#B97622",
                },
            ];
            var et = (e) => {
                    let { selectedLottery: a, onSelect: t } = e;
                    return (
                        (0, r.useEffect)(() => {
                            (0, m.v)(m.u.front, "seleciona-loteria");
                        }, []),
                        (0, s.jsxs)("div", {
                            className: "flex-1 flex flex-col justify-center items-center bg-border text-foreground",
                            children: [
                                (0, s.jsxs)("header", {
                                    className:
                                        "w-full [background-image:_var(--gradient-primary)] text-primary-foreground p-6 shadow-card relative overflow-hidden",
                                    children: [
                                        (0, s.jsx)("div", {
                                            className:
                                                "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent",
                                        }),
                                        (0, s.jsx)("div", {
                                            className:
                                                "container mx-auto flex items-center justify-center gap-4 relative z-10",
                                            children: (0, s.jsxs)("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    (0, s.jsx)(H, {}),
                                                    (0, s.jsx)("div", {
                                                        className: "text-3xl font-black tracking-wider text-shadow",
                                                        children: (0, s.jsx)("span", {
                                                            className:
                                                                "bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent",
                                                            style: {
                                                                fontFamily: 'Impact, "Arial Black", sans-serif',
                                                                textShadow: "rgba(0, 0, 0, 0.3) 2px 2px 4px",
                                                                letterSpacing: 2,
                                                            },
                                                            children: "LOTOAPP",
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        }),
                                    ],
                                }),
                                (0, s.jsx)("div", {
                                    className: "px-mobile pt-4 pb-8 flex-1 flex items-center justify-center",
                                    children: (0, s.jsx)("div", {
                                        className: "w-full max-w-2xl animate-fade-in",
                                        children: (0, s.jsxs)(X, {
                                            className: "p-4 shadow-sm border-0 md:p-8",
                                            children: [
                                                (0, s.jsx)("h2", {
                                                    className: "text-3xl font-bold text-primary mb-6 text-center",
                                                    children: "Qual loteria voc\xea deseja prever?",
                                                }),
                                                (0, s.jsx)("div", {
                                                    className: "grid grid-cols-1 gap-4 md:grid-cols-2",
                                                    children: ea.map((e) =>
                                                        (0, s.jsxs)(
                                                            "button",
                                                            {
                                                                type: "button",
                                                                onClick: () => t(e),
                                                                className: (0, g.cn)(
                                                                    "flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all duration-300 hover:bg-primary/5 hover:scale-105",
                                                                    (null == a ? void 0 : a.id) === e.id
                                                                        ? "border-primary"
                                                                        : "border-border hover:border-primary/50"
                                                                ),
                                                                children: [
                                                                    (0, s.jsx)("img", {
                                                                        src: e.backgroundImg,
                                                                        alt: "",
                                                                        className: "object-contain pointer-events-none",
                                                                    }),
                                                                    (0, s.jsx)("span", {
                                                                        className:
                                                                            "text-xs text-muted-foreground font-medium pointer-events-none",
                                                                        children: ee(e.prize),
                                                                    }),
                                                                ],
                                                            },
                                                            e.id
                                                        )
                                                    ),
                                                }),
                                            ],
                                        }),
                                    }),
                                }),
                            ],
                        })
                    );
                },
                es = t(8508),
                er = t(1607);
            let en = es.fC;
            es.xz;
            let el = es.h_;
            es.x8;
            let eo = r.forwardRef((e, a) => {
                let { className: t, ...r } = e;
                return (0, s.jsx)(es.aV, {
                    ref: a,
                    className: (0, g.cn)(
                        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
                        t
                    ),
                    ...r,
                });
            });
            eo.displayName = es.aV.displayName;
            let ei = r.forwardRef((e, a) => {
                let { className: t, children: r, ...n } = e;
                return (0, s.jsxs)(el, {
                    children: [
                        (0, s.jsx)(eo, {}),
                        (0, s.jsxs)(es.VY, {
                            ref: a,
                            className: (0, g.cn)(
                                "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
                                t
                            ),
                            ...n,
                            children: [
                                r,
                                (0, s.jsxs)(es.x8, {
                                    className:
                                        "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
                                    children: [
                                        (0, s.jsx)(er.Z, { className: "h-4 w-4" }),
                                        (0, s.jsx)("span", { className: "sr-only", children: "Close" }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                });
            });
            ei.displayName = es.VY.displayName;
            let ec = (e) => {
                let { className: a, ...t } = e;
                return (0, s.jsx)("div", {
                    className: (0, g.cn)("flex flex-col space-y-1.5 text-center sm:text-left", a),
                    ...t,
                });
            };
            ec.displayName = "DialogHeader";
            let ed = r.forwardRef((e, a) => {
                let { className: t, ...r } = e;
                return (0, s.jsx)(es.Dx, {
                    ref: a,
                    className: (0, g.cn)("text-lg font-semibold leading-none tracking-tight", t),
                    ...r,
                });
            });
            (ed.displayName = es.Dx.displayName),
                (r.forwardRef((e, a) => {
                    let { className: t, ...r } = e;
                    return (0, s.jsx)(es.dk, {
                        ref: a,
                        className: (0, g.cn)("text-sm text-muted-foreground", t),
                        ...r,
                    });
                }).displayName = es.dk.displayName);
            var em = t(7053);
            let eu = (0, t(535).j)(
                    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
                    {
                        variants: {
                            variant: {
                                default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                                destructive:
                                    "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
                                outline:
                                    "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                                secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                                ghost: "hover:bg-accent hover:text-accent-foreground",
                                link: "text-primary underline-offset-4 hover:underline",
                            },
                            size: {
                                default: "h-9 px-4 py-2",
                                sm: "h-8 rounded-md px-3 text-xs",
                                lg: "h-10 rounded-md px-8",
                                icon: "h-9 w-9",
                            },
                        },
                        defaultVariants: { variant: "default", size: "default" },
                    }
                ),
                ex = r.forwardRef((e, a) => {
                    let { className: t, variant: r, size: n, asChild: l = !1, ...o } = e,
                        i = l ? em.g7 : "button";
                    return (0, s.jsx)(i, {
                        className: (0, g.cn)(eu({ variant: r, size: n, className: t })),
                        ref: a,
                        ...o,
                    });
                });
            ex.displayName = "Button";
            let ep = (e) =>
                "maismilionaria" === e ? "\uD83D\uDCB8" : "diadesorte" === e ? "\uD83C\uDF40" : "\uD83C\uDFB2";
            var ef = (e) => {
                let { lottery: a, open: t, onClose: r, onContinue: n } = e;
                return a
                    ? (0, s.jsx)(en, {
                          open: t,
                          onOpenChange: r,
                          children: (0, s.jsxs)(ei, {
                              className: "sm:max-w-md",
                              children: [
                                  (0, s.jsx)(ec, {
                                      children: (0, s.jsx)(ed, {
                                          className: "text-center text-xl font-bold text-primary",
                                          children: a.name,
                                      }),
                                  }),
                                  (0, s.jsxs)("div", {
                                      className: "flex flex-col items-center gap-4 py-4 text-foreground",
                                      children: [
                                          (0, s.jsxs)("div", {
                                              className: "text-center space-y-3 w-full",
                                              children: [
                                                  (0, s.jsx)("p", {
                                                      className: "text-sm text-foreground",
                                                      children: (0, s.jsxs)("span", {
                                                          className: "font-medium",
                                                          children: [ep(a.id), " ", a.name],
                                                      }),
                                                  }),
                                                  (0, s.jsxs)("p", {
                                                      className: "text-sm",
                                                      children: [
                                                          (0, s.jsx)("span", {
                                                              className: "font-medium",
                                                              children: "Como jogar:",
                                                          }),
                                                          " ",
                                                          a.howToPlay,
                                                          ".",
                                                      ],
                                                  }),
                                                  (0, s.jsxs)("p", {
                                                      className: "text-sm",
                                                      children: [
                                                          (0, s.jsx)("span", {
                                                              className: "font-medium",
                                                              children: "Dias de sorteio:",
                                                          }),
                                                          " ",
                                                          a.drawDays,
                                                          ".",
                                                      ],
                                                  }),
                                                  a.obs &&
                                                      (0, s.jsxs)("p", {
                                                          className: "text-sm",
                                                          children: [
                                                              (0, s.jsx)("span", {
                                                                  className: "font-medium",
                                                                  children: "Obs:",
                                                              }),
                                                              " ",
                                                              a.obs,
                                                          ],
                                                      }),
                                              ],
                                          }),
                                          (0, s.jsx)(ex, {
                                              onClick: n,
                                              className: "w-full h-11 mt-4 uppercase font-semibold",
                                              children: "Continuar",
                                          }),
                                      ],
                                  }),
                              ],
                          }),
                      })
                    : null;
            };
            let eh = [
                { quantity: 2, img: "https://spyscope.online/lt/img/ball-1.png" },
                { quantity: 4, img: "https://spyscope.online/lt/img/ball-2.png" },
                { quantity: 6, img: "https://spyscope.online/lt/img/ball-3.png" },
                { quantity: 8, img: "https://spyscope.online/lt/img/ball-4.png" },
            ];
            function eg(e) {
                let { selectedLottery: a } = e,
                    { setPagePresell: t } = (0, c.S)(),
                    [n, l] = (0, r.useState)(null);
                return (
                    (0, r.useEffect)(() => {
                        (0, m.v)(m.u.front, "gerar-jogo");
                    }, []),
                    (0, s.jsxs)("div", {
                        className: "overflow-hidden max-w-lg mx-auto",
                        children: [
                            (0, s.jsx)("img", {
                                src: null == a ? void 0 : a.backgroundImg,
                                alt: "",
                                className: "-mt-3.5 w-full pointer-events-none object-contain",
                            }),
                            !n &&
                                (0, s.jsxs)(s.Fragment, {
                                    children: [
                                        (0, s.jsx)("h1", {
                                            className:
                                                "px-mobile py-8 text-3xl font-bold text-center uppercase text-blue-1",
                                            children: "Quantos jogos voc\xea quer gerar?",
                                        }),
                                        (0, s.jsx)("h2", {
                                            className: "px-mobile pb-2 font-bold text-center uppercase",
                                            children: "Clique em uma das bolinhas para escolher a quantia de jogos",
                                        }),
                                    ],
                                }),
                            n &&
                                (0, s.jsxs)("h2", {
                                    className: "px-mobile text-3xl pt-14 pb-4 font-bold text-center text-blue-2",
                                    children: ["Voc\xea escolheu ", n.quantity, " jogos"],
                                }),
                            (0, s.jsxs)("div", {
                                className: "px-4 shadow-sm mb-8",
                                children: [
                                    !n &&
                                        (0, s.jsx)("div", {
                                            className: "grid grid-cols-2",
                                            children: eh.map((e) =>
                                                (0, s.jsx)(
                                                    "div",
                                                    {
                                                        className: "p-6 flex items-center justify-center",
                                                        children: (0, s.jsx)("button", {
                                                            type: "button",
                                                            onClick: () => {
                                                                l(e), scrollTo(0, 0);
                                                            },
                                                            className:
                                                                "transition-transform duration-300 hover:scale-105",
                                                            children: (0, s.jsx)("img", {
                                                                src: e.img,
                                                                alt: "",
                                                                className: "pointer-events-none object-contain",
                                                            }),
                                                        }),
                                                    },
                                                    e.img
                                                )
                                            ),
                                        }),
                                    n &&
                                        (0, s.jsxs)(s.Fragment, {
                                            children: [
                                                (0, s.jsx)("img", {
                                                    src: n.img,
                                                    alt: "",
                                                    className: "mx-auto aspect-square object-contain",
                                                }),
                                                (0, s.jsx)("button", {
                                                    type: "button",
                                                    onClick: () => t("checking-results"),
                                                    className:
                                                        "my-10 py-3 text-lg font-bold text-center rounded-full w-full bg-green-6 text-white",
                                                    children: "Gerar Combina\xe7\xf5es",
                                                }),
                                            ],
                                        }),
                                ],
                            }),
                        ],
                    })
                );
            }
            function ej(e) {
                let { selectedLottery: a } = e,
                    { setPagePresell: t } = (0, c.S)(),
                    [n, l] = (0, r.useState)(0);
                return (
                    (0, r.useEffect)(() => {
                        let e = setInterval(() => {
                            l((a) => (a >= 100 ? (clearInterval(e), 100) : a + 1));
                        }, 50);
                        return () => clearInterval(e);
                    }, []),
                    (0, r.useEffect)(() => {
                        100 === n && t("result");
                    }, [n]),
                    (0, r.useEffect)(() => {
                        (0, m.v)(m.u.front, "checando-resultados");
                    }, []),
                    (0, s.jsxs)("section", {
                        className: "px-mobile flex-1 flex flex-col justify-center",
                        children: [
                            (0, s.jsx)("img", {
                                src: null == a ? void 0 : a.logoImg,
                                alt: "",
                                className: "mx-auto aspect-squar object-contain max-w-[200px]",
                            }),
                            (0, s.jsxs)("span", {
                                className: "mt-12 block text-center font-extrabold text-5xl",
                                children: [n, "%"],
                            }),
                            (0, s.jsx)("div", {
                                className: "my-8 w-full bg-black/10 rounded-full overflow-hidden",
                                children: (0, s.jsx)("div", {
                                    className: "rounded-full h-3 transition-all duration-100",
                                    style: { width: "".concat(n, "%"), backgroundColor: null == a ? void 0 : a.color },
                                }),
                            }),
                            (0, s.jsxs)("p", {
                                className: "text-center text-lg font-medium",
                                children: [
                                    "\uD83E\uDDEE Estudando resultados ",
                                    (0, s.jsx)("br", {}),
                                    " anteriores...",
                                ],
                            }),
                        ],
                    })
                );
            }
            let ev = (e) => {
                let { numbers: a, prize: t } = e,
                    { setPagePresell: n } = (0, c.S)();
                return (
                    (0, r.useEffect)(() => {
                        (0, m.v)(m.u.front, "resultado");
                    }, []),
                    (0, s.jsxs)("div", {
                        className: "pb-8 flex-1 flex flex-col justify-center items-center bg-border text-foreground",
                        children: [
                            (0, s.jsxs)("header", {
                                className:
                                    "w-full [background-image:_var(--gradient-primary)] text-primary-foreground p-6 shadow-card relative overflow-hidden",
                                children: [
                                    (0, s.jsx)("div", {
                                        className:
                                            "absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent",
                                    }),
                                    (0, s.jsx)("div", {
                                        className:
                                            "container mx-auto flex items-center justify-center gap-4 relative z-10",
                                        children: (0, s.jsxs)("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                (0, s.jsx)(H, {}),
                                                (0, s.jsx)("div", {
                                                    className: "text-3xl font-black tracking-wider text-shadow",
                                                    children: (0, s.jsx)("span", {
                                                        className:
                                                            "bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent",
                                                        style: {
                                                            fontFamily: 'Impact, "Arial Black", sans-serif',
                                                            textShadow: "rgba(0, 0, 0, 0.3) 2px 2px 4px",
                                                            letterSpacing: 2,
                                                        },
                                                        children: "LOTOAPP",
                                                    }),
                                                }),
                                            ],
                                        }),
                                    }),
                                ],
                            }),
                            (0, s.jsxs)("div", {
                                className:
                                    "pt-8 flex-1 px-mobile max-w-2xl mx-auto space-y-8 flex flex-col items-center justify-center",
                                children: [
                                    (0, s.jsxs)("div", {
                                        className: "space-y-8",
                                        children: [
                                            (0, s.jsxs)("div", {
                                                className: "text-center space-y-4",
                                                children: [
                                                    (0, s.jsx)("h2", {
                                                        className:
                                                            "text-3xl font-bold flex items-center justify-center gap-2 text-[hsl(var(--success))]",
                                                        children: "\uD83D\uDD10 Previs\xe3o Gerada com Sucesso!",
                                                    }),
                                                    (0, s.jsx)("div", {
                                                        className: "grid grid-cols-5 gap-3 max-w-lg mx-auto",
                                                        children: a.map((e, a) =>
                                                            (0, s.jsx)(
                                                                "div",
                                                                {
                                                                    className:
                                                                        "aspect-square rounded-xl [background-image:_var(--gradient-primary)] text-primary-foreground flex items-center justify-center text-xl font-bold shadow-button transform transition-all duration-300 number-reveal blur-[6px]",
                                                                    style: { animationDelay: "".concat(0.1 * a, "s") },
                                                                    children: e.toString().padStart(2, "0"),
                                                                },
                                                                a
                                                            )
                                                        ),
                                                    }),
                                                ],
                                            }),
                                            (0, s.jsxs)("div", {
                                                className: "text-center space-y-3",
                                                children: [
                                                    (0, s.jsx)("p", {
                                                        className: "text-lg font-medium text-foreground",
                                                        children:
                                                            "\uD83D\uDCC8 Com esses n\xfameros, sua estimativa de premia\xe7\xe3o \xe9:",
                                                    }),
                                                    (0, s.jsx)("div", {
                                                        className:
                                                            "[background-image:_var(--gradient-prize)] text-[hsl(var(--prize-foreground))] px-6 py-4 rounded-xl shadow-prize",
                                                        children: (0, s.jsxs)("span", {
                                                            className: "text-3xl font-bold",
                                                            children: ["\uD83D\uDCB0 ", ee(t)],
                                                        }),
                                                    }),
                                                ],
                                            }),
                                        ],
                                    }),
                                    (0, s.jsx)("div", {
                                        className: "flex justify-center",
                                        children: (0, s.jsx)("button", {
                                            type: "button",
                                            onClick: () => n("vsl"),
                                            className:
                                                "flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary-light button-lift h-11 rounded-md px-8 animate-btn-breathe",
                                            children: "Revelar N\xfameros",
                                        }),
                                    }),
                                    (0, s.jsx)("div", {
                                        className:
                                            "bg-card/80 backdrop-blur-sm border border-primary/20 rounded-lg p-4 text-center",
                                        children: (0, s.jsx)("p", {
                                            className: "text-sm text-muted-foreground",
                                            children:
                                                "Os n\xfameros foram gerados com base em um sistema avan\xe7ado de intelig\xeancia artificial que analisa os padr\xf5es da loteria. Anote os n\xfameros para jogar",
                                        }),
                                    }),
                                ],
                            }),
                        ],
                    })
                );
            };
            function eb() {
                let { pagePresell: e, setPagePresell: a } = (0, c.S)(),
                    [t, l] = (0, r.useState)(null),
                    [o, d] = (0, r.useState)([]),
                    [m, u] = (0, r.useState)(0),
                    [x, f] = (0, r.useState)(!1),
                    h = (0, r.useCallback)((e) => {
                        let { min: a, max: t, pick: s } = e.numbersRange,
                            r = [];
                        for (; r.length < s; ) {
                            let e = Math.floor(Math.random() * (t - a + 1)) + a;
                            r.includes(e) || r.push(e);
                        }
                        return r.sort((e, a) => e - a);
                    }, []),
                    g = (0, r.useCallback)(() => {
                        if (!t) return 0;
                        let e = t.prize;
                        return e < 4421 ? e : Math.round(Math.random() * (e - 4421) + 4421);
                    }, [t]),
                    j = {
                        "lottery-selector": (0, s.jsx)(et, {
                            selectedLottery: t,
                            onSelect: (e) => {
                                l(e), f(!0);
                            },
                        }),
                        "generate-game": (0, s.jsx)(eg, { selectedLottery: t }),
                        "checking-results": (0, s.jsx)(ej, { selectedLottery: t }),
                        result: (0, s.jsx)(ev, { numbers: o, prize: m }),
                        vsl: (0, s.jsx)(p, {}),
                        surveys: (0, s.jsx)(J, {}),
                        "vsl-pr": (0, s.jsx)(Y, {}),
                    };
                return (
                    (0, n.J)({ redirectPath: "/back1" }),
                    (0, r.useEffect)(() => {
                        t && (d(h(t)), u(g()));
                    }, [t]),
                    (0, s.jsxs)(s.Fragment, {
                        children: [
                            (0, s.jsx)(i, {}),
                            j[e],
                            (0, s.jsx)(ef, {
                                lottery: t,
                                open: x,
                                onClose: () => f(!1),
                                onContinue: () => {
                                    a("generate-game"), f(!1), scrollTo(0, 0);
                                },
                            }),
                        ],
                    })
                );
            }
        },
        8632: function (e, a, t) {
            "use strict";
            t.d(a, {
                V: function () {
                    return o;
                },
                K: function () {
                    return l;
                },
            });
            var s = t(7437),
                r = t(3448);
            let n = { primary: "bg-green-1" };
            function l(e) {
                let { variant: a, className: t, children: l, type: o = "button", animate: i = !0, ...c } = e;
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)("button", {
                        type: o,
                        className: (0, r.cn)(
                            "mx-auto w-full px-3 py-4 flex items-center justify-center gap-2 text-white leading-none font-semibold text-center rounded-2xl disabled:opacity-50 disabled:cursor-not-allowed",
                            n[a],
                            i && "enabled:animate-scale-down-button",
                            t
                        ),
                        ...c,
                        children: l,
                    }),
                });
            }
            let o = (e) => {
                let { children: a, href: t, extraParams: n = {}, dataFornpay: l, className: o } = e;
                return (0, s.jsxs)(s.Fragment, {
                    children: [
                        l &&
                            (0, s.jsx)("a", {
                                "data-fornpay": l,
                                href: "javascript:void(0)",
                                className: (0, r.cn)(o),
                                children: a,
                            }),
                        !l &&
                            (0, s.jsx)(s.Fragment, {
                                children: (0, s.jsx)("button", {
                                    type: "button",
                                    onClick: () => {
                                        if (navigator.userAgent)
                                            try {
                                                let e = new URL(t),
                                                    a = new URLSearchParams(window.location.search);
                                                Object.entries(n).forEach((e) => {
                                                    let [t, s] = e;
                                                    a.set(t, String(s));
                                                }),
                                                    (e.search = a.toString()),
                                                    window.location.assign(e.toString());
                                            } catch (e) {
                                                console.error("Erro ao construir a URL:", e);
                                            }
                                    },
                                    className: (0, r.cn)(o),
                                    children: a,
                                }),
                            }),
                    ],
                });
            };
        },
        3869: function (e, a, t) {
            "use strict";
            function s(e) {
                let a = e.match(RegExp("(<vturb-smartplayer.*?<\\/vturb-smartplayer>)(?=\\s*<script)", "s")),
                    t = e.match(/s\.src="([^"]+player\.js)"/),
                    s = e.match(/vid-([a-z0-9]+)/i);
                return { htmlBlock: a ? a[1] : "", scriptUrl: t ? t[1] : "", cleanId: s ? s[1] : "" };
            }
            t.d(a, {
                S: function () {
                    return s;
                },
            });
        },
        7863: function (e, a, t) {
            "use strict";
            t.d(a, {
                u: function () {
                    return r;
                },
                v: function () {
                    return n;
                },
            });
            var s = t(602);
            let r = {
                    front: "front",
                    back1: "back1",
                    back2: "back2",
                    upsell1: "upsell1",
                    dws1: "dws1",
                    upsell2: "upsell2",
                    upsell3: "upsell3",
                },
                n = (e, a) => {
                    let t = a ? "".concat(e, "-").concat(a) : "".concat(e);
                    s.clarity.hasStarted() && s.clarity.setEvent(t);
                };
        },
        3731: function (e, a, t) {
            "use strict";
            t.d(a, {
                J: function () {
                    return r;
                },
            });
            var s = t(2265);
            let r = (e) => {
                let { redirectPath: a, func: t } = e,
                    r = (0, s.useRef)(a),
                    n = (0, s.useRef)(t),
                    l = (0, s.useRef)(!1);
                (0, s.useEffect)(() => {
                    (r.current = a), (n.current = t);
                }, [a, t]),
                    (0, s.useEffect)(() => {
                        let e = (e) => {
                                e.preventDefault(),
                                    setTimeout(() => {
                                        let e = window.location.origin,
                                            a =
                                                "".concat(e).concat("/funil-2").concat(r.current).trim() +
                                                (e.indexOf("?") > 0 ? "&" : "?") +
                                                document.location.search.replace("?", "");
                                        n.current ? n.current() : (location.href = a);
                                    }, 1);
                            },
                            a = () => {
                                l.current ||
                                    ((l.current = !0),
                                    history.pushState(null, "", location.href),
                                    history.pushState(null, "", location.href),
                                    document.removeEventListener("click", a),
                                    document.removeEventListener("touchend", a),
                                    document.removeEventListener("keydown", a));
                            };
                        return (
                            document.addEventListener("click", a, { once: !0 }),
                            document.addEventListener("touchend", a, { once: !0 }),
                            document.addEventListener("keydown", a, { once: !0 }),
                            window.addEventListener("popstate", e),
                            () => {
                                window.removeEventListener("popstate", e),
                                    document.removeEventListener("click", a),
                                    document.removeEventListener("touchend", a),
                                    document.removeEventListener("keydown", a);
                            }
                        );
                    }, []);
            };
        },
        3448: function (e, a, t) {
            "use strict";
            t.d(a, {
                cn: function () {
                    return n;
                },
            });
            var s = t(1994),
                r = t(3335);
            function n() {
                for (var e = arguments.length, a = Array(e), t = 0; t < e; t++) a[t] = arguments[t];
                return (0, r.m6)((0, s.W)(a));
            }
        },
        4898: function (e, a, t) {
            "use strict";
            t.d(a, {
                S: function () {
                    return i;
                },
                UserProvider: function () {
                    return o;
                },
            });
            var s = t(7437),
                r = t(2265);
            let n = {
                    pagePresell: "lottery-selector",
                    setPagePresell: () => {},
                    pageUpsell1: "home",
                    setPageUpsell1: () => {},
                },
                l = (0, r.createContext)(n),
                o = (e) => {
                    let { children: a } = e,
                        [t, o] = (0, r.useState)(n.pagePresell),
                        [i, c] = (0, r.useState)(n.pageUpsell1);
                    return (0, s.jsx)(l.Provider, {
                        value: { pagePresell: t, setPagePresell: o, pageUpsell1: i, setPageUpsell1: c },
                        children: a,
                    });
                },
                i = () => (0, r.useContext)(l);
        },
    },
    function (e) {
        e.O(0, [896, 633, 282, 971, 117, 744], function () {
            return e((e.s = 8399));
        }),
            (_N_E = e.O());
    },
]);
