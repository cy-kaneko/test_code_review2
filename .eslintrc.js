module.exports = {
    extends: "@cybozu/eslint-config/presets/kintone-customize-es5",
    "env": {"browser": true},
    "globals": {
        "kintone": true,
        "kintoneUIComponent": true,
        "KintoneRestAPIClient": true
    }
};