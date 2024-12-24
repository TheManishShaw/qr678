import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { CircleArrowRight } from 'lucide-react'
import React from 'react'

const SingeArticle = ({journal, index}) => {
  return (
    <Card key={index} className="flex flex-col">
    <CardContent className="flex-1 p-4">
      <div className="aspect-video bg-gray-200 mb-4 rounded-lg flex items-center justify-center">
        <span className="text-xl font-semibold text-muted-foreground">{journal.journal}</span>
      </div>
      <h3 className="font-medium mb-2 line-clamp-2 text-xl">{journal.title}</h3>
      {/* <p className="text-sm text-muted-foreground line-clamp-3">{journal.description}</p> */}
    </CardContent>
    <CardFooter className="p-6 pt-0">
      <Button variant="link" className="px-0">
        Read the paper  <CircleArrowRight />
      </Button>
    </CardFooter>
  </Card>
  )
}

export default SingeArticle