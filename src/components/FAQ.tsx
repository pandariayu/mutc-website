"use client"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { BiMinus, BiPlus } from "react-icons/bi";

import { faqs } from "@/data/faq";

const FAQ: React.FC = () => {
    return (
        <section id="faq" className="container mx-auto px-6 lg:px-[calc(8.333333333333334%+1.5rem)] sm:py-16 pb-10">
            <div className="flex flex-col lg:flex-row gap-10">
                <div className="lg:w-1/4">
                    <h2 className="lg:text-5xl font-semibold mb-8 max-w-2xl">Frequently Asked Questions</h2>
                    <p className="lg:mt-10 text-[#AFADB5] lg:text-left">
                        Ask us anything!
                    </p>
                    <a href="mailto:team@melbunitriathlon.club" className="block text-xl text-primary font-semibold hover:underlinelg:text-left">team@melbunitriathlon.club</a>
                </div>

                <div className="w-full lg:w-3/4 mx-auto border-b">
                    {faqs.map((faq, index) => (
                        <div key={index} className="mb-7">
                            <Disclosure>
                                {({ open }) => (
                                    <>
                                        <DisclosureButton className="flex items-center justify-between w-full px-4 pt-7 text-lg text-left border-t">
                                            <h3 className="lg:text-2xl text-xl">{faq.question}</h3>
                                            {open ?
                                                <BiMinus className="w-10 h-10 lg:w-7 lg:h-7 text-primary" /> :
                                                <BiPlus className="w-10 h-10 lg:w-7 lg:h-7 text-primary" />
                                            }
                                        </DisclosureButton>
                                        <DisclosurePanel className="px-4 pt-4 pb-2 text-[#AFADB5]">
                                            {faq.answer}
                                        </DisclosurePanel>
                                    </>
                                )}
                            </Disclosure>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
