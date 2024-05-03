import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, Badge } from "lucide-react";
import { PageHeader } from "./layouts/PageHeader";
import { Sidebar } from "./layouts/Sidebar";
import { Textarea } from "@/components/ui/textarea";

export function DocumentCreate()
{
    return (
        
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
        
            <Sidebar />
        
            <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        
                <PageHeader />
        
                <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">

                <div className="mx-auto grid max-w-[59rem] flex-1 auto-rows-max gap-4 item-center">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="icon" className="h-7 w-7">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Button>
              <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                Add Document
              </h1>
            </div>
            <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
              <div className="w-full items-start gap-4 lg:col-span-2 lg:gap-8">
                <Card x-chunk="dashboard-07-chunk-0">
                  <CardHeader>
                    <CardTitle>Add New Document</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-6">
                      <div className="grid gap-3">
                        <Label htmlFor="name">Document Name</Label>
                        <Input
                          id="name"
                          type="text"
                          className="w-full"
                          defaultValue=""
                        />
                      </div>
                      <div className="grid gap-3">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                          id="description"
                          defaultValue=""
                          className="min-h-32"
                        />
                      </div>
                      <div className="grid w-full max-w-sm items-center gap-1.5">
                        <Label htmlFor="file">File (*pdf)</Label>
                        <Input id="file" type="file" />
                        </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                Discard
              </Button>
              <Button size="sm">Save Document</Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
                </main>
            </div>
        </div>        
    )
}