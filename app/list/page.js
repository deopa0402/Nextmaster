import Image from 'next/image';
import foodimg from '/public/food1.png';

export default function Home() {
    const name = '메인화면';
    const 상품 = ['Tomatoes', 'pasta', 'garlic'];

    상품.map((a, i) => {
        console.log(a);
    });

    return (
        <div>
            <h1 className="title">list</h1>
            {상품.map((a, i) => {
                return (
                    <div className="food" key={i}>
                        <Image src={foodimg} alt="food" className="food-img" />
                        <h4>{a} $40</h4>
                    </div>
                );
            })}
        </div>
    );
}
