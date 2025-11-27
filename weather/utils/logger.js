const LOG_LEVEL = "DEBUG";

function log(level, message) {
  const levels = {
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
  };
  if (levels[level] >= levels[LOG_LEVEL]) {
    const timeStamp = new Date().toISOString();
    console.log(`[${timeStamp}][${level}]::${message}`);
  }
}

export const logger = {
  debug: (message) => {
    log("DEBUG", message);
  },
  info: (message) => {
    log("INFO", message);
  },
  warn: (message) => {
    log("WARN", message);
  },
  error: (message) => {
    log("ERROR", message);
  },
};
