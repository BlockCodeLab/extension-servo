import { Text } from '@blockcode/ui';
import translations from './l10n.yaml';
import iconURI from './icon.png';
import servoPyURI from './servo.py';

export default {
  iconURI,
  name: (
    <Text
      id="extension.servo.name"
      defaultMessage="Servo"
    />
  ),
  files: [
    {
      name: 'servo',
      type: 'text/x-python',
      uri: servoPyURI,
    },
  ],
  blocks: [
    {
      id: 'set_180servo',
      text: (
        <Text
          id="extension.servo.180servo"
          defaultMessage="set PIN [PIN] 180° servo angle to [ANGLE]°"
        />
      ),
      inputs: {
        PIN: {
          type: 'number',
          default: 1,
        },
        ANGLE: {
          type: 'angle',
          default: 0,
        },
      },
      python(block) {
        this.definitions_['import_extension_servo'] = 'from extensions.servo import servo';
        let code = '';
        if (this.STATEMENT_PREFIX) {
          code += this.injectId(this.STATEMENT_PREFIX, block);
        }
        const pinCode = this.valueToCode(block, 'PIN', this.ORDER_NONE) || '0';
        const angleCode = this.valueToCode(block, 'ANGLE', this.ORDER_NONE) || '0';
        code += `servo.set_angle(num(${pinCode}), num(${angleCode}))\n`;
        return code;
      },
    },
    {
      id: 'set_90servo',
      text: (
        <Text
          id="extension.servo.90servo"
          defaultMessage="set PIN [PIN] 90° servo angle to [ANGLE]°"
        />
      ),
      inputs: {
        PIN: {
          type: 'number',
          default: 1,
        },
        ANGLE: {
          type: 'angle',
          default: 0,
        },
      },
      python(block) {
        this.definitions_['import_extension_servo'] = 'from extensions.servo import servo';
        let code = '';
        if (this.STATEMENT_PREFIX) {
          code += this.injectId(this.STATEMENT_PREFIX, block);
        }
        const pinCode = this.valueToCode(block, 'PIN', this.ORDER_NONE) || '0';
        const angleCode = this.valueToCode(block, 'ANGLE', this.ORDER_NONE) || '0';
        code += `servo.set_angle(num(${pinCode}), num(${angleCode}), angle=90)\n`;
        return code;
      },
    },
    {
      id: 'set_motor',
      text: (
        <Text
          id="extension.servo.motor"
          defaultMessage="set PIN [PIN] 360° servo rotate [ROTATE]"
        />
      ),
      inputs: {
        PIN: {
          type: 'number',
          default: 1,
        },
        ROTATE: {
          type: 'number',
          default: '1',
          menu: [
            [
              <Text
                id="extension.servo.motorClockwise"
                defaultMessage="clockwise"
              />,
              '1',
            ],
            [
              <Text
                id="extension.servo.motorAnticlockwise"
                defaultMessage="anticlockwise"
              />,
              '-1',
            ],
            [
              <Text
                id="extension.servo.motorStop"
                defaultMessage="stop"
              />,
              '0',
            ],
          ],
        },
      },
      python(block) {
        this.definitions_['import_extension_servo'] = 'from extensions.servo import servo';
        let code = '';
        if (this.STATEMENT_PREFIX) {
          code += this.injectId(this.STATEMENT_PREFIX, block);
        }
        const pinCode = this.valueToCode(block, 'PIN', this.ORDER_NONE) || '0';
        const rotateCode = block.getFieldValue('ROTATE') || '0';
        code += `servo.set_motor(num(${pinCode}), num(${rotateCode}))\n`;
        return code;
      },
    },
  ],
  translations,
};
