import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card';
import { ChevronLeft, File } from 'lucide-react';
import { PageHeader } from './layouts/PageHeader';
import { Sidebar } from './layouts/Sidebar';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Api from '@/lib/api';
import { useEffect, useState } from 'react';

export function DocumentEdit() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [document, setDocument] = useState('');
  const [errors, setErrors] = useState([]);

  const navigate = useNavigate();

  const handleDocumentChange = (e) => {
    setDocument(e.target.files[0]);
  };

  const { id } = useParams();

  const fetchDetailDocument = async () => {
    await Api.get(`/documents/${id}`).then((response) => {
      console.log(response);
      setName(response.data.name);
      setDescription(response.data.description);
    });
  };

  useEffect(() => {
    fetchDetailDocument();
  }, []);

  const updateDocument = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('document', document);
    formData.append('_method', 'PUT');

    await Api.post(`/documents/${id}/edit`, formData)
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
                <Link to="/docs">
                  <File className="h-3.5 w-3.5" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
                    List Documents
                  </span>
                </Link>
              </Button>
            </div>
          </div>
          <form onSubmit={updateDocument}>
            <Card x-chunk="dashboard-06-chunk-0">
              <CardHeader>
                <CardTitle>Edit Document</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6">
                  <div className="grid gap-3">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      type="text"
                      className="w-full"
                      defaultValue={name}
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      defaultValue={description}
                      className="min-h-32"
                    />
                  </div>
                  <div className="grid gap-3">
                    <Label htmlFor="document">Name</Label>
                    <Input id="document" type="file" className="w-full" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline">Cancel</Button>
                <Button>Save Document</Button>
              </CardFooter>
            </Card>
          </form>
        </main>
      </div>
    </div>
  );
}
