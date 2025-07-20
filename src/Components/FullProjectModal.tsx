import { Badge, Button, Indicator, Modal,Image, Group,Text, ScrollArea } from '@mantine/core'
import React from 'react'

const FullProjectModal = (props:any) => {
  return (
    <>
      <Modal.Root data-autofocus scrollAreaComponent={ScrollArea.Autosize} size='70%' className='font-mono' opened={props.opened} onClose={props.close}>
        <Modal.Overlay />
        <Modal.Content className='!rounded-3xl'>
          <Modal.Header className='!bg-bgColor !border-2 !border-b-0 !border-primaryColor !rounded-tr-3xl !rounded-tl-3xl'>
            <Modal.Title className='!text-4xl text-white flex items-center gap-3 !font-bold'>{props.title}{props.live===true? <Badge className='flex items-center gap-1' size='lg' variant='outline' color="red" rightSection={<Indicator color='red' position="middle-end" size={10} processing/>}>live</Badge>:''}</Modal.Title>
            <Modal.CloseButton size='md' iconSize='30px' className='!bg-bgColor !text-red-500' />
          </Modal.Header>
          <Modal.Body className='!bg-bgColor !p-2 !border-2 !border-t-0 !border-primaryColor !rounded-br-3xl !rounded-bl-3xl'>
          <Image className='!rounded-xl !shadow-[0_0_5px_0_#64FFDA]'
        src={props.image}
        alt={props.image}
      />
      <Group mt='md' mb="md">
      {props.technologies.map((tech:string,index:number)=> <Badge size='xl' variant='light' color='#64FFDA'>{tech}</Badge>)}
      </Group>
    <Text className='!text-justify' size="lg" c="dimmed">
      {props.desc}
    </Text>
     <Group justify='space-between' mt='md' mb='md'>
        <a href={props.github} target='_blank' className='w-[48%]'><Button  variant='outline' size='lg' color='#64FFDA' fullWidth mt="md" radius="md"> View Code  </Button></a>
    <a href={props.link} target='_blank' className='w-[48%]'><Button  className='!text-bgColor' size='lg' color='#64FFDA' fullWidth mt="md" radius="md"> View Live App</Button></a>
     </Group>
    </Modal.Body>
        </Modal.Content>
      </Modal.Root>

    </>
  )
}

export default FullProjectModal 