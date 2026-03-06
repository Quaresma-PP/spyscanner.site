(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [185],
    {
        4110: function (e, t, n) {
            Promise.resolve().then(n.t.bind(n, 8003, 23)),
                Promise.resolve().then(n.t.bind(n, 5591, 23)),
                Promise.resolve().then(n.t.bind(n, 2880, 23)),
                Promise.resolve().then(n.t.bind(n, 2778, 23)),
                Promise.resolve().then(n.bind(n, 7189)),
                Promise.resolve().then(n.bind(n, 4898));
        },
        7189: function (e, t, n) {
            "use strict";
            n.d(t, {
                LoadingInitial: function () {
                    return u;
                },
            });
            var r = n(2265),
                i = n(7048),
                o = n(2308),
                s = n.n(o),
                l = n(602);
            function u(e) {
                let { children: t } = e;
                return (
                    (0, r.useEffect)(() => {
                        // void 0 !== window.navigator && "undefined" != typeof navigator && navigator.userAgent && s()(),
                        //     i.tq || window.open("about:blank", "_self");
                    }, []),
                    (0, r.useEffect)(() => {
                        let e = "tup5ijkq123213kd";
                        e && l.clarity.init(e);
                    }, []),
                    t
                );
            }
        },
        4898: function (e, t, n) {
            "use strict";
            n.d(t, {
                S: function () {
                    return u;
                },
                UserProvider: function () {
                    return l;
                },
            });
            var r = n(7437),
                i = n(2265);
            let o = {
                    pagePresell: "lottery-selector",
                    setPagePresell: () => {},
                    pageUpsell1: "home",
                    setPageUpsell1: () => {},
                },
                s = (0, i.createContext)(o),
                l = (e) => {
                    let { children: t } = e,
                        [n, l] = (0, i.useState)(o.pagePresell),
                        [u, a] = (0, i.useState)(o.pageUpsell1);
                    return (0, r.jsx)(s.Provider, {
                        value: { pagePresell: n, setPagePresell: l, pageUpsell1: u, setPageUpsell1: a },
                        children: t,
                    });
                },
                u = () => (0, i.useContext)(s);
        },
        2778: function () {},
    },
    function (e) {
        e.O(0, [686, 461, 896, 225, 971, 117, 744], function () {
            return e((e.s = 4110));
        }),
            (_N_E = e.O());
    },
]);
