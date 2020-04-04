//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#y6tnd2
Blockly.Blocks['hands_create_detect'] = {
  init: function () {
    this.appendValueInput("camera")
      .setCheck(null)
      .appendField("建立手掌偵測")
      .appendField(new Blockly.FieldVariable("hands"), "hands")
      .appendField(" ,影像來源");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

//https://blockly-demo.appspot.com/static/demos/blockfactory_old/index.html#ro7vws
Blockly.Blocks['hands_on_detect'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldVariable("hands"), "hands")
        .appendField("辨識率高於")
        .appendField(new Blockly.FieldTextInput("0.9"), "conf")
        .appendField("觸發");
    this.appendStatementInput("exec")
        .setCheck(null)
        .appendField("執行");
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['hands_rtn_param'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("取得")
        .appendField(new Blockly.FieldVariable("hands"), "hands")
        .appendField("的")
        .appendField(new Blockly.FieldDropdown([["x 座標", "0"], ["y 座標", "1"], ["寬度", "2"], ["高度", "3"], ["準確度", "4"]]), "info");
    this.setOutput(true, null);
    this.setColour(45);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};