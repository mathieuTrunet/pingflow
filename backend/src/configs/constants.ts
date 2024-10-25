const SERVER_PORT = 4000

const REDIS_PORT = 6379
const REDIS_URL = `redis://redis:${REDIS_PORT}`

const REDIS_KEY = 'flights'

const WORKER_PORT = 5000
const WORKER_ENDPOINT = '/worker'
const WORKER_URL = `worker:${WORKER_PORT}${WORKER_ENDPOINT}`

const REDIS_JOB_START_CHANNEL = 'job_start'
const REDIS_JOB_END_CHANNEL = 'job_end'

export { SERVER_PORT, REDIS_URL, REDIS_JOB_START_CHANNEL, REDIS_JOB_END_CHANNEL, WORKER_URL, REDIS_KEY }
