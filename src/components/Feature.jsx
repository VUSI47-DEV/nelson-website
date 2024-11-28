import { Box, Card } from "@mui/material"
import FeatureCard from "./Card"

const Feature = () => {
  return (
    <>
        <Box className="w-full  h-screen px-11">
            <Box>
                <h2>What I can Do For You</h2>
            </Box>
            <Box sx={{display:'flex', gap:'2rem', flexDirection:'column'}}>
                    <Box className="flex gap-5">~
                        <Box sx={{minWidth:275}}>
                            <Card sx={{width:"90%", height:'320px'}}>
                                <FeatureCard
                                    title={'Risk Insurance Planning'}
                                    desc={'The process of planning for unforeseen events like death, disability or servere illness of a breadwinner or business owner.'}
                                />
                            </Card>
                        </Box>
                        <Box sx={{minWidth:275}}>
                            <Card sx={{width:"90%", height:'320px'}}>
                                <FeatureCard
                                    title={'Savings and Investment Planning'}
                                    desc={'They have different purposes, but both are crucial to ensure you reach your financial goals in the short medium and long term.'}
                                />
                            </Card>
                        </Box>
                        <Box sx={{minWidth:275}}>
                            <Card sx={{width:"90%", height:'320px'}}>
                                <FeatureCard
                                    title={'Retirement Planning'}
                                    desc={'Ensure you maintain your current lifestyle during retirement by starting early and selecting the correct investment strategy.'}
                                />
                            </Card>
                        </Box>
                    </Box>
                    <Box className="flex gap-5">
                        <Box sx={{minWidth:275}}>
                            <Card sx={{width:"90%", height:'320px'}}>
                                <FeatureCard
                                    title={'Tax Planning'}
                                    desc={'Taxes are comlicated and tax relief cannot be viewed in isolation. Tax planning is an essential part of a financial plan'}
                                />
                            </Card>
                        </Box>
                        <Box sx={{minWidth:275}}>
                            <Card sx={{width:"90%", height:'320px'}}>
                                <FeatureCard
                                    title={'Short-Term Insurance Planning'}
                                    desc={'Cover your personal or business material possessions against loss due to events such as fire, burglary or damage.'}
                                />
                            </Card>
                        </Box>
                        <Box sx={{minWidth:275}}>
                            <Card sx={{width:"90%", height:'320px'}}>
                                <FeatureCard
                                    title={'Estate and Legacy Planning'}
                                    desc={'Protect and grow your assets during your lifetime and ensure you provde for loved ones after your death.'}
                                />
                            </Card>
                        </Box>
                    </Box>
            </Box>
        </Box>
    </>
  )
}

export default Feature