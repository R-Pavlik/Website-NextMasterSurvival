import React from 'react'
interface Minigames {
    Title: string
    Description: string
    Image: string
}

const minigames: Minigames[] = [
    {

        Title: 'Survival 1.21',
        Description: 'Survival server na verzi 1.21, který čeká na tvé objevování nových věcí v této verzi!',
        Image: "./Survival-1-21.png"
    },
    {

        Title: 'Floating Survival',
        Description: 'Svět Minecraftu od vyžaduje odvahu. Je plný nástrah a nebezpečí, které musíte podstoupit, abyste přežili. My jsme tuto příčku ještě zvedli. A to doslova! Připoj se na nový "Floating Survival", svět tvořený z obrovských vznášejících se ostrovů, kde každý špatný krok může znamenat jistou smrt. Jsi ochoten přijmout tuto výzvu a přežít v tomto neobvyklém světě?',
        Image: "./FloatingSurv.png"
    },
    {

        Title: 'Parkour',
        Description: 'Fanoušci parkouru se u nás nudit nebudou. Na serveru máme k dispozici speciální parkour, který se generuje do nekonečna každému hráči, který dostane chuť si zaskákat. Žádný parkour nikdy není stejný, vždy vznikne něco úplně nového! Stačí vejít do portálu a budeš přenesen na svůj parkour. Dokážeš překonat rekord serveru?',
        Image: "./Parkour.png"
    },
    {

        Title: 'PVP Server',
        Description: 'Jsi soutěživý typ, který rád soupeří se svými přáteli? I u nás najdeš své místo! Zajdi si na náš PVP server, kde můžete porovnat své síly v KitPVP, TheBridge, 1V1 a dalších!',
        Image: "./PvP.png"
    },
    


]
export default function Minigames() {
  return (
    <div className='w-screen h-full bg-neutral-800 flex justify-center items-center flex-col'>
        <div className='  text-white w-screen flex flex-col justify-center items-center'> 
            <h1 className=' text-4xl font-bold mt-2 mb-2'>Minihry </h1>
            <div className=' md:w-[100px] w-[80px] h-[4px] bg-white -mt-1 mb-2'></div>
            </div>
        <div className="flex flex-col gap-2">
            {minigames.map((minigame, index) => (
                <div className='md:w-[1000px] w-screen md:h-[400px] h-[1000px]  mt-8 mb-8 flex md:flex-row flex-col justify-center items-center rounded-xl'>
                    <div className='md:w-1/2 md:h-full w-[90%] h-1/2  md:rounded-l-xl rounded-xl'> 
                    <img src={minigame.Image} alt="" className=' w-full h-full object-cover md:rounded-l-xl md:rounded-r-none rounded-xl'/>
                
                </div>
                    <div className='md:w-1/2 md:h-full w-[90%] h-1/2 bg-white md:rounded-r-xl md:rounded-l-none' >
                        <div className='w-full h-[50px]  flex flex-col justify-center items-center '> 
                            <h1 className='text-black text-3xl font-bold'>{minigame.Title}</h1>
                            <div className=' md:w-[100px] w-[80px] h-[4px] bg-black mb-2 '></div>
                            </div>
                            <div className='w-[85%] h-full mb-2 ml-10 mt-10 text-md text-wrap'>
                                <p className=' text-black'>{minigame.Description}</p>
                            </div>
                    
                    </div>
                </div>
             ))}
        </div>
    
    
    
    
    </div>
  )
}
