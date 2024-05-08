"use client";
import {Card, CardBody, CardFooter, Image} from "@nextui-org/react";
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function BoardModal({name, image, execs, board, interns}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <>
            <div>
                <Card className="z-0" fullwidth shadow="sm" isFooterBlurred isPressable onPress={onOpen}>
                    <Image
                    removeWrapper
                    alt="Card background"
                    className="w-fit h-fit lg:w-[510px] lg:h-[300px] object-cover"
                    src={image}
                    />
                    <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                    <div className="flex flex-grow gap-2 items-center">
                      <div className="flex flex-col">
                        <p >{name}</p>
                      </div>
                    </div>
                    </CardFooter>
                </Card>
            </div>
            <Modal className="p-8" size="4xl" isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
                <ModalContent>
                {(onClose) => (
                    <>
                    <ModalHeader className="flex flex-col gap-1 mb-3 text-2xl font-semibold">{name}</ModalHeader>
                    <ModalBody>
                        <div className="flex flex-col gap-16 text-pretty text-center">
                            <div>
                                <Image
                                className=" z-0 w-3/4 h-3/4 object-cover"
                                src={image}
                                alt="Board Iteration Image"
                                priority
                                    />
                            </div>                      
                            <div className="flex flex-col lg:flex-row justify-between">
                                <div>
                                  <h3 className="mb-3 text-xl font-semibold">Executives</h3>
                                  <ul className="list-none">
                                  {execs.map((item) => (
                                      <li>{item}</li>
                                  ))}
                                  </ul>
                                  <br/>
                                </div>                                
                                <div>
                                  <h3 className="mb-3 text-xl font-semibold">Board</h3>
                                  <ul className="list-none">
                                  {board.map((item) => (
                                      <li>{item}</li>
                                  ))}
                                  </ul>
                                  <br/>
                                </div>                              
                                <div>
                                  <h3 className="mb-3 text-xl font-semibold">Interns</h3>
                                  <ul className="list-none">
                                  {interns.map((item) => (
                                      <li>{item}</li>
                                  ))}
                                  </ul>
                                </div>
                            </div>
                        </div>                       
                    </ModalBody>
                    </>
                )}
                </ModalContent>
            </Modal>
        </>
    );
}
