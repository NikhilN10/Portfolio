import React from 'react'
import { Card, Group, Badge, Button, Image, Text, Indicator, useMatches } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import FullProjectModal from './FullProjectModal';

const ProjectCard = (props:any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const badge=useMatches({
    xsm:'sm',md:'md',lg:'lg'
  })
  // const btn=useMatches({
  //   xs:'xs',md:'md',sm:'sm'
  // })
  return (
    <div className='w-[32%] lg-mx:w-[46%] md-mx:w-[48%] sm-mx:w-[90%] xs-mx:w-full' data-aos="fade-up" data-aos-duration="800">
    <Card onClick={open} className='!bg-bgColor border-2 mb-5 transition-transform duration-300 ease-out cursor-pointer hover:!scale-[1.02] hover:!shadow-[0_0_10px_1px_#64FFDA80] !border-primaryColor' shadow="lg" padding="sm" radius="lg" withBorder>
    <Card.Section className='p-3'>
      <Image className='!rounded-xl !shadow-[0_0_5px_0_#64FFDA]'
        src={props.image} 
        alt={props.image}
      />
    </Card.Section>

    <Group justify="space-between" mt="xs" mb="xs">
      <Text className='!text-2xl gap-2 !font-bold !text-white flex items-center sm-mx:!text-xl'>{props.title}{props.live===true? <Badge className='!px-1' variant='outline' color="red" rightSection={<Indicator className='!mr-0.5' color='red' position="middle-end" size={7} processing/>}>live</Badge>:''}</Text>
      
    </Group>
    <Group mb="sm" className='!gap-2'>
      {props.technologies.map((tech:string,index:number)=>index<3 && <Badge size={badge} variant='light' color='#64FFDA'>{tech}</Badge>)}
    </Group>
    <Text className='!text-justify !text-sm !text-xs' lineClamp={5} size="sm" c="dimmed">
      {props.desc}
    </Text>

    <Button onClick={open} className='' color='#64FFDA' variant='outline'  mt="md" radius="md">
    Show More
    </Button>
  </Card>
  <FullProjectModal opened={opened} close={close} title={props.title} desc={props.desc}
     image={props.image} live={props.live} link={props.link} github={props.github} technologies={props.technologies} />
 </div>)
}

export default ProjectCard