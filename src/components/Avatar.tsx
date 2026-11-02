import { motion } from 'framer-motion'

/** Original inline line-art avatar; replace this component with a portrait if preferred. */
export default function Avatar() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, rotate: 2 }}
      animate={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative mx-auto w-full max-w-[440px]"
      aria-label="Hand-drawn illustration of a developer wearing glasses"
      role="img"
    >
      <svg viewBox="0 0 440 470" className="h-auto w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M88 440C104 380 135 355 177 340L193 327H248L266 340C316 354 347 383 360 440" fill="#fff" stroke="#171717" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M174 339C184 365 203 380 222 380C242 380 260 365 269 339" fill="#171717" stroke="#171717" strokeWidth="5" strokeLinejoin="round"/>
        <path d="M179 329V286H263V330" fill="#fff" stroke="#171717" strokeWidth="5" strokeLinejoin="round"/>
        <path d="M139 184C137 111 168 58 220 58C278 58 307 108 304 185L291 267C283 311 257 337 221 337C184 337 157 310 150 267L139 184Z" fill="#fff" stroke="#171717" strokeWidth="5" strokeLinejoin="round"/>
        <path d="M138 190C119 181 112 195 116 220C119 244 132 256 150 251" fill="#fff" stroke="#171717" strokeWidth="5"/>
        <path d="M303 190C322 181 329 195 325 220C322 244 309 256 291 251" fill="#fff" stroke="#171717" strokeWidth="5"/>
        <path d="M137 184C127 105 162 43 220 43C281 43 315 104 304 185L288 170C283 147 275 127 263 111C237 129 198 131 169 111C155 129 146 151 145 178L137 184Z" fill="#242424" stroke="#171717" strokeWidth="5" strokeLinejoin="round"/>
        <path d="M166 181C178 174 192 174 204 180M238 180C250 174 264 174 276 181" stroke="#171717" strokeWidth="5" strokeLinecap="round"/>
        <rect x="151" y="189" width="70" height="52" rx="17" fill="#fff" stroke="#171717" strokeWidth="5"/>
        <rect x="221" y="189" width="70" height="52" rx="17" fill="#fff" stroke="#171717" strokeWidth="5"/>
        <path d="M221 207H221" stroke="#171717" strokeWidth="6"/>
        <path d="M151 207H140M291 207H302" stroke="#171717" strokeWidth="5" strokeLinecap="round"/>
        <circle cx="186" cy="215" r="9" fill="#171717"/><circle cx="256" cy="215" r="9" fill="#171717"/>
        <path d="M222 218L213 252C219 258 229 258 235 253" stroke="#171717" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M190 282C207 296 238 296 254 281" stroke="#171717" strokeWidth="4" strokeLinecap="round"/>
        <path d="M91 440L122 389L155 440M353 440L322 389L289 440" stroke="#171717" strokeWidth="5" strokeLinejoin="round"/>
        <path d="M111 405H329M98 429H342" stroke="#171717" strokeWidth="4"/>
      </svg>
      <div className="absolute -left-4 top-[12%] hidden -translate-x-full -rotate-6 font-hand text-xl text-ink sm:block">hi, I'm Abhishek</div>
      <svg className="absolute -left-10 top-[19%] hidden w-16 sm:block" viewBox="0 0 70 70" fill="none" aria-hidden="true">
        <path d="M3 5C38 8 53 25 57 58M43 47L57 60L65 43" stroke="#171717" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </motion.div>
  )
}
