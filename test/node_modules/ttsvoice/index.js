const { spawn } = require('child_process');

function ttsvoice(text, voice = '', speed = 0) {
  const args = ['-v', voice, '-s', speed.toString(), text];
  const sayProcess = spawn('powershell.exe', ['-c', `(New-Object -ComObject SAPI.SpVoice).Speak('${text}')`]);

  sayProcess.on('error', (err) => {
    console.error(`Error: ${err}`);
  });

  sayProcess.on('exit', (code, signal) => {
    if (code === null) {
      console.error(`Error: ${signal}`);
    }
  });
  return text;
}

module.exports = ttsvoice;
