import { Injectable } from '@nestjs/common';
import { Rider } from './interfaces/rider.interface';

@Injectable()
export class RidersService {
  private readonly riders: Rider[] = [
    {
      id: 31,
      number: '93',
      firstname: 'Marc',
      lastname: 'Marquez',
      country: 'Spain',
      height: 169,
      weight: 65,
      biography:
        'Marc Marquez became the youngest ever six-time World Champion after taking his fourth premier class crown in 2017. On the podium in his rookie 125 campaign in 2008, Marquez won that crown in 2010 before moving up to Moto2™ for 2011. After a tough start, the rider from Cervera went on an incredible winning spree and had closed the gap to Championship leader Stefan Bradl to a handful of points, before a crash in practice for the Malaysian GP saw Marquez forced to cede the fight and miss the two remaining races of the year. Problems with his vision in the off season saw surgery then finally fix the problem, and despite the shortened preparation for 2012 the Spaniard took the crown in stunning style by the Australian GP. Replacing outgoing Casey Stoner in 2013 at the Repsol Honda Team, Marquez won his second ever MotoGP™ race and incredibly took the Championship in his rookie year. Then beginning 2014 with 10 wins in a row, Marquez won that crown in Motegi to successfully defend the title. Before 2015 proved more difficult with some mistakes and too many DNFs. Losing out to Jorge Lorenzo and Valentino Rossi, Marquez began 2016 with a point to prove and took another incredible Championship title – redesigning his mentality and thinking about the long game as he put consistency at the top of the agenda. The reigning Champion then fought down to the wire against Andrea Dovizioso for the 2017 crown, with everything going down to the final round and Marquez - despite an incredible moment into Turn 1 - keeping it on the podium to break another record and take another title. He began 2018 as the reigning Champion once more and went on to make more history, taking nine wins and wrapping up the title in Japan - becoming the youngest ever seven-time World Champion. 2019 saw the number 93 take yet another step up, fighting off Dovizioso once more, as well as new rivals in Alex Rins and Fabio Quartararo, with a series of tough last lap battles. After a season of only finishing second or better in every race - bar a DNF at the Circuit of the Americas - the Repsol Honda rider went on to make it Magic Number 8, needing just 15 rounds, getting the job done in Thailand. Any hopes of another record breaking year were put on hold in 2020 however, as Marquez sustained an injury to his right humerus in the season opener in Jerez, which eventually ruled him out of the season. Thankfully, Marquez was able to return to action at Round 3 in Portimao in 2021. Slowly but surely, the number 93 regained speed and fitness and at the Sachsenring, he was back on the top step. A P2 in Aragon was followed by back-to-back victories in Austin and Misano, signalling Marquez was returning to some real form. However, a training accident caused the return of diplopia (double vision) that he suffered with in 2011. Marquez missed the last two rounds of the season, as we hopefully await to see a fully fit eight-time Champion back on the Repsol Honda in 2022.',
    },
    {
      id: 10,
      number: '20',
      firstname: 'Fabio',
      lastname: 'Quartararo',
      country: 'France',
      height: 177,
      weight: 66,
      biography:
        "Frenchman Fabio Quartararo got his start in motorcycle racing at the age of four, moving to Spain to develop his career and proclaimed national champion in the 70, 80 and 125 categories. In 2013 he won the FIM CEV Repsol Moto3™ championship and went on to win the same title again in 2014. The previous rule against participating in the Moto3™ World Championship until the age of 16 had been repealed for the winner of the then-national crown, so for 2015 - aged just 15 - Quartararo joined teammate Jorge Navarro in the Estrella Galicia 0,0 Honda team. Impressing from the start, Quartararo was on the podium in just his second race. He repeated that in Assen after claiming pole at both Jerez and Le Mans, but unfortunately a late season ankle injury halted his progress. For 2016 he moved to the Leopard Racing team with KTM machinery, and then moved up to Moto2™ in 2017 with Paginas Amarillas HP40. After some impressive showings of pace, Quartararo moved to Speed Up for his sophomore season in the intermediate class and took his first win - and pole - at the Circuit de Barcelona-Catalunya. His move to the premier class surprised many, but what followed in 2019 was nothing short of remarkable: seven podiums, fifth in the Championship and Rookie of the Year with 192 points. His stock continued to rise in 2020, opening up the season with back-to-back victories while securing a third in Barcelona. He lead the chasing pack in the Championship race until a sudden drop off in form cost him dearly and he slipped all the way down to eighth in the standings. The pressure was on straight away for El Diablo in 2021, replacing his hero Valentino Rossi in the factory Yamaha squad, but he didn't disappoint. Victory at Round 2 in Qatar was the springboard he needed and, despite arm pump issues in Jerez and problems with his leathers in Barcelona, he was a reformed character, keeping his cool to put together a memorable season. Four further victories, ten podiums, five pole positions all equalled his, and France's, first MotoGP™ World Championship. Can the Frenchman go back-to-back in 2022?",
    },
  ];

  create(rider: Rider) {
    this.riders.push(rider);
  }

  findAll(): Rider[] {
    return this.riders;
  }

  findOne(id: number) {
    return this.riders.find((rider) => rider.id === id);
  }
}
