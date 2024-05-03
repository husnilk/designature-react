import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from '@/components/ui/card';
import { ChevronLeft, File } from 'lucide-react';
import { PageHeader } from './layouts/PageHeader';
import { Sidebar } from './layouts/Sidebar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Api from '@/lib/api';
import { FormDescription } from '@/components/ui/form';

export function DocumentCreate() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [document, setDocument] = useState('');
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const handleDocumentChange = (e) => {
    setDocument(e.target.files[0]);
  };

  const storeDocument = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('document', document);

    await Api.post('/documents', formData)
      .then(() => {
        navigate('/docs');
      })
      .catch((error) => {
        console.log(error.response.data);
        setErrors(error.response.data);
      });
  };
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <Sidebar />
      <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
        <PageHeader />
        <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="h-7 w-7" asChild>
              <Link to="/docs">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Back</span>
              </Link>
            </Button>
            <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
              Documents
            </h1>
            <div className="ml-auto flex items-center gap-2">
              <Button size="sm" variant="outline" className="h-8 gap-1" asChild>
                <Link to="/dashboard">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    List Document
                  </span>
                </Link>
              </Button>
            </div>
          </div>
          <form onSubmit={storeDocument}>
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>Add Document</CardTitle>
                <CardDescription>Add your document here</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      onChange={(e) => setName(e.target.value)}
                      className="w-full"
                      defaultValue=""
                    />
                    {errors.name && (
                      <FormDescription>{errors.name[0]}</FormDescription>
                    )}
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      defaultValue=""
                      onChange={(e) => setDescription(e.target.value)}
                      className="min-h-32"
                    />
                    {errors.description && (
                      <FormDescription>{errors.description[0]}</FormDescription>
                    )}
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="document">File (*.pdf)</Label>
                    <Input
                      id="document"
                      type="file"
                      onChange={handleDocumentChange}
                      className="w-full"
                    />
                    {errors.document && (
                      <FormDescription>{errors.document[0]}</FormDescription>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button type="submit">Save Document</Button>
              </CardFooter>
            </Card>
          </form>
        </main>
      </div>
    </div>
  );
}
