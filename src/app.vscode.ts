//#region imports
import { Utils } from 'tnp-core/src';
import { CommandType, ExecCommandType, executeCommand } from 'tnp-helpers/src';
import type { ExtensionContext } from 'vscode';
//#endregion

const group = 'static-columns CLI essentials';

export const commands: CommandType[] = (
  [
    {
      title: 'hello world',
      exec: opt => {
        console.log('opt', opt);
        // opt.log.info('hello world');
      },
    },
    {
      title: 'hey!',
      exec: opt => {
        opt.log.info('hey!');
      },
    },
  ] as CommandType[]
).map(c => {
  if (!c.command) {
    c.command = `extension.${Utils.camelize(c.title)}`;
  }
  if (!c.group) {
    c.group = group;
  }
  return c;
});

export function activate(context: ExtensionContext) {
  for (let index = 0; index < commands.length; index++) {
    const {
      title,
      command = '',
      exec = '',
      options,
      isDefaultBuildCommand,
    } = commands[index];
    const sub = executeCommand(
      title,
      command,
      exec,
      options,
      isDefaultBuildCommand,
      context,
    );
    if (sub) {
      context.subscriptions.push(sub);
    }
  }
}

export function deactivate() {}

export default { commands };
