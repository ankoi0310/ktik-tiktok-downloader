import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { FAQS } from '@/lib/constants'
import React from 'react'

const FaqAccordion = () => {
  return (
    <Accordion type='single' collapsible className='w-full'>
      {
        FAQS.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className={'text-start text-lg'}>{faq.question}</AccordionTrigger>
            <AccordionContent className={'text-[1rem]'}>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))
      }
    </Accordion>
  )
}
export default FaqAccordion
