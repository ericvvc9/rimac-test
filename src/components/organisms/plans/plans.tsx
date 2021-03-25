import './plans.scss';

const Planes = [
  {
    label: 'Básico',
    amount: '160',
    term: 'mensual'
  },
  {
    label: 'Avanzado',
    amount: '160',
    term: 'mensual'
  },
  {
    label: 'Premium',
    amount: '160',
    term: 'mensual'
  },
  {
    label: 'Full',
    amount: '160',
    term: 'mensual'
  },
]

export function Plans() {

  return <div className="plans">
    {Planes.map(() => {
      <div className="plans__square">
          <div></div>
          <div></div>
          <div></div>
      </div>
    })}
  </div>
}

