import React from "react"
import {
  Modal as ChakraModal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from "@chakra-ui/react"

interface CustomModalProps {
  title: string
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  footer: React.ReactNode
}

export default function Modal({
  title,
  isOpen,
  onClose,
  children,
  footer
}: CustomModalProps) {
  return (
    <ChakraModal isOpen={isOpen} onClose={onClose} size="xs">
      <ModalOverlay />
      <ModalContent maxW="300px" mt={4} mx="auto">
        <ModalHeader fontSize="xs" py={2}>
          {title}
        </ModalHeader>
        <ModalCloseButton size="sm" />
        <ModalBody pb={2} pt={0}>
          {children}
        </ModalBody>
        <ModalFooter pt={1} pb={2}>
          {footer}
        </ModalFooter>
      </ModalContent>
    </ChakraModal>
  )
}
