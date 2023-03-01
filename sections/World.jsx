'use client';

import styles from "../styles";
import {motion} from "framer-motion";
import {fadeIn, staggerContainer} from "../utils/motion";
import {TitleText, TypingText} from "../components";


const World = () => (
    <section className={`${styles.paddings} relative z-10`}>
        <motion.div
            className={`${styles.innerWidth} mx-auto flex flex-col`}
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.25}}
        >
            <TypingText title="| People around the world" textStyles="text-center"/>
            <TitleText
                title={<>Track friends around you and invite them to play together in the same world</>}
                textStyles="text-center"
            />
            {/* planet image */}
            <motion.div
                variants={fadeIn('up', 'tween', 0.2, 1)}
                className="relative mt-[68px] flex w-full h-[550px]"
            >
                <img src="/map.png" alt="World map" className="w-full h-full object-cover"/>
                <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                    <img src="/people-01.png" alt="person" className="w-full h-full"/>
                </div>
                <div className="absolute top-10 left-40 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                    <img src="/people-02.png" alt="person" className="w-full h-full"/>
                </div>
                <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
                    <img src="/people-03.png" alt="person" className="w-full h-full"/>
                </div>
                <div className="absolute top-[50px] right-[22%] w-[196px] h-[150px] p-[6px] rounded-[24px] bg-[#5d6680]">
                    <img src="/card-02.png" alt="person" className="relative w-full h-full object-contain rounded-[24px]"/>
                    <div className="absolute top-1/2 left-[20%] flex flex-row justify-center gap-5 items-center">
                        <div className="w-[24px] h-[24px] flex flex-row justify-center">
                            <img src="/people-06.png" alt="person 4" className="w-full h-full object-cover z-[3]"/>
                            <img src="/people-05.png" alt="person 4" className="w-full h-full object-cover -ml-[10px] z-[2]"/>
                            <img src="/people-04.png" alt="person 4" className="w-full h-full object-cover -ml-[10px] z-[1]"/>
                        </div>
                        <span className="text-white font-thin text-[12px]"> + 264 has joined</span>
                    </div>

                    <h3 className="text-white font-normal text-[18px] absolute bottom-[15px] left-[13%]">Hawkins Labs</h3>

                </div>

                <div className="absolute bottom-[180px] left-[240px] w-[196px] h-[150px] p-[6px] rounded-[24px] bg-[#5d6680]">
                    <img src="/card-01.png" alt="person" className="relative w-full h-full object-contain rounded-[24px]"/>
                    <div className="absolute gradient-04 w-full h-full top-0 left-0 blur-2xl"/>
                    <div className="absolute top-1/2 left-[20%] flex flex-row justify-center gap-5 items-center">
                        <div className="w-[24px] h-[24px] flex flex-row justify-center">
                            <img src="/people-06.png" alt="person 4" className="w-full h-full object-cover z-[3]"/>
                            <img src="/people-05.png" alt="person 4" className="w-full h-full object-cover -ml-[10px] z-[2]"/>
                            <img src="/people-04.png" alt="person 4" className="w-full h-full object-cover -ml-[10px] z-[1]"/>
                        </div>
                        <span className="text-white font-thin text-[12px]"> + 264 has joined</span>
                    </div>

                    <h3 className="text-white font-normal text-[18px] absolute bottom-[15px] left-[13%]">The Upside Down</h3>

                </div>
            </motion.div>

        </motion.div>
    </section>
);

export default World;
