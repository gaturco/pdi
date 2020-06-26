import { animate, group, query, style, transition, trigger } from '@angular/animations';

const animatorStyle = {
  position: 'fixed',
  width: '100%',
  height: 'calc(100% - 40px)',
  top: '75px'
}

const animationProps = '0.5s ease-in-out'

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('home => objetivos', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('home => comomevejo', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('home => feedbacks', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('home => momento-carreira', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('home => passos', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('home => plano-acao', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('objetivos => comomevejo', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('objetivos => feedbacks', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('objetivos => momento-carreira', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('objetivos => passos', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('objetivos => plano-acao', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('objetivos => home', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('comomevejo => home', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('comomevejo => objetivos', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('comomevejo => feedbacks', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('comomevejo => momento-carreira', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('comomevejo => passos', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('comomevejo => plano-acao', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('feedbacks => home', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('feedbacks => objetivos', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('feedbacks => comomevejo', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('feedbacks => momento-carreira', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('feedbacks => passos', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('feedbacks => plano-acao', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('momento-carreira => home', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('momento-carreira => objetivos', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('momento-carreira => comomevejo', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('momento-carreira => feedbacks', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('momento-carreira => passos', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('momento-carreira => plano-acao', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('passos => home', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('passos => objetivos', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('passos => comomevejo', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('passos => feedbacks', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('passos => momento-carreira', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('passos => plano-acao', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(-100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('plano-acao => home', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('plano-acao => objetivos', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('plano-acao => comomevejo', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('plano-acao => feedbacks', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('plano-acao => momento-carreira', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
    transition('plano-acao => passos', [
      query(':enter, :leave', style(animatorStyle), { optional: true }),
      group([
        query(':enter', [
          style({ transform: 'translate(-100%)' }),
          animate(animationProps, style({ transform: 'translateX(0%)' })),
        ], { optional: true }),
        query(':leave', [
          style({ transform: 'translate(0%)' }),
          animate(animationProps, style({ transform: 'translateX(100%)' })),
        ], { optional: true }),
      ])
    ]),
  ])
