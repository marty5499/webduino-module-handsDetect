Blockly.JavaScript['hands_create_detect'] = function (block) {
  var variable_hands = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('hands'), Blockly.Variables.NAME_TYPE);
  var value_camera = Blockly.JavaScript.valueToCode(block, 'camera', Blockly.JavaScript.ORDER_ATOMIC);
  var code = variable_hands + " = new HandDetect();\n";
  code += variable_hands + '.setCamera(' + value_camera + ');\n';
  return code;
};

Blockly.JavaScript['hands_on_detect'] = function (block) {
  var variable_hands = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('hands'), Blockly.Variables.NAME_TYPE);
  var number_conf = block.getFieldValue('conf');
  var statements_exec = Blockly.JavaScript.statementToCode(block, 'exec');
  var code = variable_hands + '.on(function(handInfo){\n';
  code += statements_exec;
  code += '});\n';
  code += 'await ' + variable_hands + '.start("#ff0000",5);\n';
  code += variable_hands + '.startCam("#ff0000",5);\n';
  return code;
};

Blockly.JavaScript['hands_rtn_param'] = function (block) {
  var hands = Blockly.JavaScript.variableDB_.getName(block.getFieldValue('hands'), Blockly.Variables.NAME_TYPE);
  var info = block.getFieldValue('info');
  var code = hands + '.handInfo[' + info + ']';
  return [code, Blockly.JavaScript.ORDER_NONE];
};