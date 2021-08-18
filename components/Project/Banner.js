import Image from 'next/image'

export const Banner = ({ img }) => {
    return (
        <div>
            <Image src={img} layout="fill" objectFit="cover" />
            <style jsx>{`
                div{
                    width:100%;
                    height:25vh;
                    display:block;
                    margin: 3rem auto;
                    position:relative;
                    border-radius:10px;
                }
                @media screen and (min-width:768px){
                div{
                    width:70%;
                    margin: 3.6rem auto 0 auto;

                }
            }
            `}</style>
        </div>
    )
}
