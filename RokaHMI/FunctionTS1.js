var TcHmi;
(function (TcHmi) {
    let Functions;
    (function (Functions) {
        let RokaHMI;
        (function (RokaHMI) {
            function FunctionTS1(...input) {
                console.log(input);
                return [{}];
                // return JSON.parse(input);
            }
            RokaHMI.FunctionTS1 = FunctionTS1;
        })(RokaHMI = Functions.RokaHMI || (Functions.RokaHMI = {}));
    })(Functions = TcHmi.Functions || (TcHmi.Functions = {}));
})(TcHmi || (TcHmi = {}));
TcHmi.Functions.registerFunctionEx('FunctionTS1', 'TcHmi.Functions.RokaHMI', TcHmi.Functions.RokaHMI.FunctionTS1);
//# sourceMappingURL=FunctionTS1.js.map