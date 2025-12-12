import Image from 'next/image'
import CalenderIcon from '../../../../public/icon/calenderIcon.svg'
import NotionIcon from '../../../../public/icon/notionIcon.svg'
import Outlook from '../../../../public/icon/outlook.svg'
import SlackIcon from '../../../../public/icon/slackIcon.svg'
import TrelloIcon from '../../../../public/icon/trelloIcon.svg'
const Integrations = () => {
  return (
    <div>
        <h3 className='text-black/50 text-2xl text-center my-11 '>Our native plants are listed below  integrations</h3>
        <div className='flex justify-center gap-22.5   '>
          <Image alt='CalenderIcon' src={CalenderIcon}/>
          <Image alt='Outlook' src={Outlook}/>
          <Image alt='NotionIcon' src={NotionIcon}/>
          <Image alt='TrelloIcon' src={TrelloIcon}/>
          <Image alt='SlackIcon' src={SlackIcon}/>

        </div>
    </div>
  )
}

export default Integrations