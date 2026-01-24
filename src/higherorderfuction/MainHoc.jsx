
import withHocCard from './withHocCard'
import Alpha from './component/Alpha'
import Beta from './component/Beta'

function MainHocCusHook() {
  const CardLookComponentAlpha = withHocCard(Alpha)
  const CardLookComponentBeta = withHocCard(Beta)

  return (
    <div className="min-h-screen bg-gray-100 flex gap-6 justify-center items-center">
      <CardLookComponentAlpha />
      <CardLookComponentBeta />
    </div>
  )
}

export default MainHocCusHook;
