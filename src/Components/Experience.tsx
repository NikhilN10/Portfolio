import { Timeline, Text, useMatches} from '@mantine/core'
import { IconBriefcaseFilled, IconGitBranch, IconGitCommit, IconGitPullRequest, IconMessageDots } from '@tabler/icons-react'
import React from 'react'
import { isTemplateSpan } from 'typescript'
import { ExperienceInfo } from '../Info'
import Skills from './Skills';

const TimelineItem=(items:any)=>{
  const size=useMatches({
    xs:15,
    md:20,
  })
    return items.map((item:any,index:number)=> <Timeline.Item data-aos="fade-up" data-aos-duration="800"
     key={index} className='!pt-12 !mb-2 sm-mx:!p-1' bullet={<IconBriefcaseFilled className='text-bgColor' size={20} />}>
        <div className='border flex flex-col shadow-[0_0_10px_0_#64FFDA50] gap-2 border-primaryColor p-4 rounded-2xl sm-mx:p-2'>
            <div className='flex gap-2 items-center'>
             
                <img className='rounded-lg w-16 md-mx:w-14' src={`/${item.company}.png`} alt='Company'/>
             
              <div className='flex flex-col'>
                 <div className='text-white text-2xl font-semibold sm-mx:text-xl xs-mx:text-lg xsm-mx:text-base'>{item.role}</div>
                 <div className='text-lg text-textColor font-semibold md-mx:text-base sm-mx:-text-sm xs-mx:text-xs'>{item.company} &#x2022; {item.date}</div>
              </div>
            </div>
             <div className='text-textColor text-justify leading-6 md-mx:text-sm xs-mx:text-xs'>
                {item.desc}
             </div>
             <div className='text-lg font-medium text-textColor md-mx:text-base sm-mx:-text-sm xs-mx:text-xs flex gap-1'>
                <div className='font-semibold text-lg text-white '>Skills: </div>
                <div className='flex gap-1 flex-wrap'>
                {item.skills.map((skill:any , index:number)=><div key={index}>
                    &#2022; {skill}    </div>)}
                    </div>
             </div>
        </div>
        
      </Timeline.Item>
    )
}

const Experience = () => {
  const size=useMatches({
    xs:15,
    md:20,
  })
  const dot=useMatches({
    xs:25,
    md:30,
  })
  return (
    <div className='px-16 mx-20 my-10 font-mono md-mx:px-6 sm-mx:px-2 lg-mx:mx-0' id='Experience'>
        <h1 className='text-4xl mb-10 text-center text-white font-bold sm-mx:text-3xl xs-mx:text-2xl  '><span className='text-primaryColor'>04.&nbsp;</span>Experience</h1>
        <Timeline active={5} color='#64FFDA' bulletSize={dot} lineWidth={2}>
             {TimelineItem(ExperienceInfo)}
             <Timeline.Item bullet={<IconBriefcaseFilled className='text-bgColor' size={20} />}></Timeline.Item>
    </Timeline>
        </div>
  )
}

export default Experience