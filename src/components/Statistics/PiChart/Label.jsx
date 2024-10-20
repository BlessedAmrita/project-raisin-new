import { easeInOut, motion } from 'framer-motion';
export const Label = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <div className='flex flex-col md:mt-0 mt-10 md:gap-5'>
          <div className='font-bold font-orbitron  text-[14px] sm:text-[20px] md:text-[24px] lg:text-[32px] lg:leading-[40px]'>
            Analytics of <span>Males & Females</span>
            <br />
            Registered for Innovision
          </div>
        </div>
      </motion.div>
    </>
  );
};
