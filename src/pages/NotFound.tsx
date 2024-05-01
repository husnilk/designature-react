import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function NotFound()
{
    return (
        <>
        <Card className="mx-auto max-w-sm">
      <CardHeader>
        <CardTitle className="text-2xl">Not Found</CardTitle>
      </CardHeader>
      <CardContent>
        <h3>Ouch...!!</h3>
        <p>The page you requested is not available</p>
        
      </CardContent>
    </Card>
        </>
    )
}