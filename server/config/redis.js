import redis from "redis"

const URL = process.env.REDIS_URL || null
let redisClient = redis.createClient(URL)

export default redisClient