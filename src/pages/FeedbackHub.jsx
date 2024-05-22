import AppLayout from "../components/elements/AppLayout";
import axios from "axios";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { PlusCircle, RefreshCw } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function FeedbackHub() {
  const [openFeedback, setOpenFeedback] = useState([])
  const [closedFeedback, setClosedFeedback] = useState([])

  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [severityLevel, setSeverityLevel] = useState('')
  const [type, setType] = useState('')

  let promise = null;

  function fetchFeedback() {
    promise = axios
      .get('/api/feedback')
      .then((response) => {
        setOpenFeedback(response.data.open)
        setClosedFeedback(response.data.closed)
      })
      .catch((err) => {
        throw err;
      });

    toast.promise(promise, {
      loading: "Loading...",
      success: (data) => {
        return `Tagasisided on laetud!`;
      },
      error: "Data cannot be retrieved",
    });
  }

  function createFeedback() {
    axios.get("/sanctum/csrf-cookie").then(() => {
      axios
        .post(`api/feedback/store`, {
          title: title,
          content: content,
          severity_level: severityLevel,
          type: type,
          status: "open",
        })
        .then((response) => {
          fetchFeedback()
        })
        .catch((error) => {
          console.log("%cERROR: ", "color: tomato; font-weight: bold;", error);
        });
    });
  }

  function feedbackType(type) {
    switch (type) {
      case "bug":
        return "Viga";
      case "suggestion":
        return "Soovitus";
      case "other":
        return "Muu (täpsustatud)";
      default:
        return "PUUDULIK";
    }
  }

  function feedbackSeverity(severity) {
    switch (severity) {
      case "low":
        return "Madal tähtsus";
      case "medium":
        return "Keskmine tähtsus";
      case "high":
        return "Kõrge tähtsus";
      default:
        return "TÄHTSUS PUUDULIK";
    }

  }

  function feedbackStatus(status) {
    switch (status) {
      case "open":
        return "Avatud";
      case "closed":
        return "Suletud";
      default:
        return "TÄHTSUS PUUDULIK";
    }
  }

  function feedbackDateFormat(date) {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(date).toLocaleDateString("et-EE", options);
  }

  function limitCharacters(description, limit = 30) {
    if (description.length <= limit) {
      return description;
    }
    return description.slice(0, limit) + "...";
  }

  useEffect(() => {
    fetchFeedback()
  }, [])

  return (
    <AppLayout>
      <div className="flex">
        <div className="text-[#c2c2c2] font-thin  w-full">
          <div
            id="PersonalTables"
            className="w-full h-fit p-4 flex flex-col gap-4"
          >
            <div className="flex fle-row w-full h-fit justify-between bg-white rounded-lg p-2 text-black">
              <h1 className="text-2xl font-bold">Tagasiside keskus:</h1>
              <AlertDialog>
                <AlertDialogTrigger className="flex h-fit py-1 w-fit  px-6">
                  <PlusCircle size={24} />
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-black">
                      Saada tagasiside
                    </AlertDialogTitle>
                  </AlertDialogHeader>
                  <Input
                    type="text"
                    onChange={(e) => {
                      setTitle(e.target.value)
                    }}
                    value={title}
                    className=" bg-white border-none py-6 text-black"
                    placeholder="Pealkiri"
                  />
                  <textarea className="resize-none p-3 rounded-md h-32" placeholder="Leitud viga, Sinu soov, jne" name="content" id="content" value={content} onChange={(e) => { setContent(e.target.value); }}></textarea>
                  <select name="severity_level" id="severity_level" className="p-3 rounded-md" value={severityLevel} onChange={(e) => { setSeverityLevel(e.target.value); }}>
                    <option value="">Tõsiduse tase</option>
                    <option value="low">Madal</option>
                    <option value="medium">Keskmine</option>
                    <option value="high">Kõrge</option>
                  </select>
                  <select name="type" id="type" className="p-3 rounded-md" value={type} onChange={(e) => { setType(e.target.value); }}>
                    <option value="">Tüüp</option>
                    <option value="bug">Viga</option>
                    <option value="suggestion">Soovitus</option>
                    <option value="other">Muu (täpsusta)</option>
                  </select>
                  <AlertDialogFooter className="flex-col lg:gap-0">
                    <AlertDialogAction
                      className="flex w-full bg-white hover:bg-gray-100"
                      onClick={() => {
                        createFeedback()
                      }}
                    >
                      Saada tagasiside
                    </AlertDialogAction>
                    <AlertDialogCancel className="flex w-full bg-[#FF0000]/60 hover:bg-red-600">
                      Katkesta
                    </AlertDialogCancel>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
            <div className="w-full flex">
              <Tabs defaultValue="open" className="w-full">
                <TabsList className="w-full p-2">
                  <TabsTrigger className="w-full" value="open">
                    Avatud
                  </TabsTrigger>
                  <TabsTrigger className="w-full" value="closed">
                    Suletud
                  </TabsTrigger>
                </TabsList>
                <TabsContent value="open" className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                  {openFeedback?.map((feedback) => (
                    <div key={feedback.id} className="w-full bg-white text-black h-full rounded-md">
                      <div className="flex justify-between items-center p-2">
                        <div className="flex flex-col w-2/3" >
                          <p className="text-xl font-bold">{feedback.title}</p>
                          <p className="">{limitCharacters(feedback.content)}</p>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-sm font-bold text-right">{feedbackType(feedback.type)}</p>
                          <p className="text-sm font-bold text-right">{feedbackSeverity(feedback.severity_level)}</p>
                        </div>
                      </div>
                      <div className="p-2 flex gap-2">
                        <AlertDialog>
                          <AlertDialogTrigger className="text-black border-2 border-black px-6 py-2 rounded">
                            Detailid
                          </AlertDialogTrigger>
                          <AlertDialogContent>
                            <AlertDialogHeader>
                              <AlertDialogTitle className="text-black">
                                Tagasiside: <span className="font-bold">{feedback.title}</span>
                              </AlertDialogTitle>
                            </AlertDialogHeader>
                            <AlertDialogDescription>
                              <p className="text-black">{feedback.content}</p> <br />
                              <p className="text-black">Tüüp: {feedbackType(feedback.type)}</p> <br />
                              <p className="text-black">Tõsidus: {feedbackSeverity(feedback.severity_level)}</p> <br />
                              <p className="text-black">Staatus: {feedbackStatus(feedback.status)}</p> <br />
                              <p className="text-black">Loodud: {feedbackDateFormat(feedback.created_at)}</p>
                              {feedback.updated_at != feedback.created_at && <br /> && <p className="text-black">Uuendatud: {feedbackDateFormat(feedback.updated_at)}</p>}
                            </AlertDialogDescription>
                            <AlertDialogFooter className="flex-col lg:gap-0">
                              <AlertDialogCancel className="flex w-full bg-gray-500 hover:bg-gray-600">
                                Sule
                              </AlertDialogCancel>
                            </AlertDialogFooter>
                          </AlertDialogContent>
                        </AlertDialog>
                        {localStorage.getItem('user').role === 'admin' && <button
                          className="text-black border-2 border-black px-6 py-2 rounded"
                          onClick={() => {
                            // Handle opening the feedback details
                          }}
                        >
                          Ava (admin)
                        </button>}
                      </div>
                    </div>
                  ))}
                </TabsContent>
                <TabsContent value="closed" className="grid gap-2 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
                  {closedFeedback?.map((feedback) => (
                    <div key={feedback.id} className="w-full bg-white text-black h-full rounded-md">
                      <div className="flex justify-between items-center p-2">
                        <div className="flex flex-col w-2/3" >
                          <p className="text-xl font-bold">{feedback.title}</p>
                          <p className="">{feedback.content}</p>
                        </div>
                        <div className="flex flex-col">
                          <p className="text-sm font-bold text-right">{feedbackType(feedback.type)}</p>
                          <p className="text-sm font-bold text-right">{feedbackSeverity(feedback.severity_level)}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </TabsContent>
              </Tabs>
            </div>
            <div></div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
