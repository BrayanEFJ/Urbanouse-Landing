import React from 'react';
import { ChevronUpIcon, ChevronDownIcon } from 'lucide-react';

const QuestionsSection = () => {
    return (
        <div className="bg-white py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-3xl font-semibold text-center text-black sm:text-5xl">Frequently Asked Questions</h2>
                    <div className='w-full flex justify-center'>
                        <p className="mt-4 text-lg text-black/60 max-w-[600px] text-center">
                            Have questions about buying, selling, or renting with Urbanouse? We've got the answers to help guide you through the process.
                        </p>
                    </div>

                    <div className="mt-12 space-y-4">
                        <div className="border-b border-gray-200 pb-4 ">
                            <button className="flex items-center justify-between w-full group">
                                <span className="text-lg text-left font-medium text-black">
                                    How do I start searching for a property with Urbanouse?
                                </span>
                                <span className="ml-6 h-7 flex items-center">
                                    <ChevronUpIcon
                                        className="h-5 w-5 text-black/60 group-hover:text-black/60"
                                        aria-hidden="true"
                                    />
                                </span>
                            </button>
                            <div className="mt-4 text-black/60">
                                You can begin by using our property search tool, which allows you to filter by location, property type, price range, and other features. Once you find a property you're interested in, simply click "View Details" to learn more or schedule a visit.
                            </div>
                        </div>
                        <div className="border-b border-gray-200 pb-4 ">
                            <button className="flex items-center justify-between w-full group">
                                <span className="text-left text-lg font-medium text-black">
                                    What services does Urbanouse offer for first-time homebuyers?
                                </span>
                                <span className="ml-6 h-7 flex items-center">
                                    <ChevronDownIcon
                                        className="h-5 w-5 text-black/60 group-hover:text-black/60"
                                        aria-hidden="true"
                                    />
                                </span>
                            </button>
                        </div>
                        <div className="border-b border-gray-200 pb-4">
                            <button className="flex items-center justify-between w-full group">
                                <span className="text-left text-lg font-medium text-black">
                                    Can Urbanouse help me sell my property?
                                </span>
                                <span className="ml-6 h-7 flex items-center">
                                    <ChevronDownIcon
                                        className="h-5 w-5 text-black/60 group-hover:text-black/60"
                                        aria-hidden="true"
                                    />
                                </span>
                            </button>
                        </div>
                        <div className="border-b border-gray-200 pb-4">
                            <button className="flex items-center justify-between w-full group">
                                <span className="text-left text-lg font-medium text-black">
                                    What types of properties does Urbanouse specialize in?
                                </span>
                                <span className="ml-6 h-7 flex items-center">
                                    <ChevronDownIcon
                                        className="h-5 w-5 text-black/60 group-hover:text-black/60"
                                        aria-hidden="true"
                                    />
                                </span>
                            </button>
                        </div>
                        <div className="border-b border-gray-200 pb-4 ">
                            <button className="flex items-center justify-between w-full group">
                                <span className="text-left text-lg font-medium text-black">
                                    Can I schedule a visit to view properties?
                                </span>
                                <span className="ml-6 h-7 flex items-center">
                                    <ChevronDownIcon
                                        className="h-5 w-5 text-black/60 group-hover:text-black/60"
                                        aria-hidden="true"
                                    />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuestionsSection;