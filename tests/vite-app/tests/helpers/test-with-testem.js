// import { execa } from 'execa';
// import { join } from 'path';
// import stripAnsi from 'strip-ansi';
// import tmp from 'tmp';

// export async function testWithTestem(expect) {
//   console.log('🤖 running dev tests with testem 🐹');

//   let tmpobj = tmp.dirSync({ unsafeCleanup: true });
//   const cwd = join(tmpobj.name, 'test-app');
//   await execa({ cwd })`pnpm i --save-dev testem http-proxy`;

//   const viteExecaProcess = execa({
//     cwd,
//   })`pnpm vite --force --clearScreen false`;
//   viteExecaProcess.stdout.setEncoding('utf8');

//   const HOST = await new Promise((resolve) => {
//     viteExecaProcess.stdout.on('data', (chunk) => {
//       const matches = /Local:\s+(https?:\/\/.*)\//g.exec(stripAnsi(chunk));

//       if (matches) {
//         resolve(matches[1]);
//       }
//     });
//   });

//   let result = await execa({
//     cwd,
//     env: {
//       HOST,
//     },
//   })`pnpm testem --file testem-dev.js ci`;

//   expect(result.exitCode, result.output).to.equal(0);
//   console.log(result.stdout);
// }
