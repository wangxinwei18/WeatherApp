set -x
PID=$(lsof -t -i:3001)
if [ -z "${PID}" ]; then
    echo "no node app running..."
  else
    echo "stop app running on port 30001 with PID ${PID}"
    kill -9 ${PID}
fi
set +x