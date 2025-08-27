// components/Dashboard/RecentProjects.tsx
import { Card, CardContent, CardTitle , CardHeader} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/types/dashboard";
import { Button } from "@/components/ui/button";
import { DollarSign, TrendingUp } from "lucide-react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
interface RecentProjectsProps {
  projects: Project[];
}

export const RecentProjects: React.FC<RecentProjectsProps> = ({ projects }) => {
  return (
    <Card className="bg-white">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl font-bold text-gray-900">Your Recent Projects</CardTitle>
        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">See all Projects</button>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* {projects.map((project, index) => (
          <div key={project.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-lg">
                {project.icon}
              </div>

              <div className="flex-1">
                <div className="flex items-center space-x-2">
                  <h3 className="font-medium text-gray-900">{project.name}</h3>
                  <Badge
                    variant={project.paymentStatus === "paid" ? "default" : "secondary"}
                    className={project.paymentStatus === "paid" ? "bg-gray-900 text-white" : "bg-gray-200 text-gray-600"}
                  >
                    {project.paymentStatus === "paid" ? "Paid" : "Not paid"}
                  </Badge>
                </div>

                <div className="text-sm text-gray-600 mt-1">{project.rate}</div>

                {project.type && (
                  <Badge variant="outline" className="mt-2 text-xs">
                    {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                  </Badge>
                )}

                {project.description && <div className="text-sm text-gray-600 mt-2">{project.description}</div>}

                {project.progress > 0 && (
                  <div className="flex items-center space-x-2 mt-2">
                    <div className="flex-1 bg-gray-200 rounded-full h-1">
                      <div className="bg-blue-500 h-1 rounded-full" style={{ width: `${project.progress}%` }}></div>
                    </div>
                    <span className="text-xs text-gray-600">{project.progress}% complete</span>
                  </div>
                )}
              </div>
            </div>

            <button className="text-gray-400 hover:text-gray-600">
              {index === 0 ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </button>
          </div>
        ))} */}
          <Accordion type="multiple" className="space-y-2">
          {projects.map((project) => (
            <AccordionItem
              key={project.id}
              value={project.id}
              className="border border-gray-200 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
            >
              <AccordionTrigger className="px-4 py-3 hover:no-underline [&[data-state=open]]:bg-white [&[data-state=open]]:border-blue-200 [&[data-state=open]]:shadow-sm rounded-lg transition-all duration-200">
                <div className="flex items-center justify-between w-full mr-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-lg shadow-sm">
                      {project.icon}
                    </div>

                    <div className="flex-1 text-left">
                      <div className="flex items-center space-x-2">
                        <h3 className="font-medium text-gray-900 text-base">
                          {project.name}
                        </h3>
                        <Badge
                          variant={project.paymentStatus === "paid" ? "default" : "secondary"}
                          className={`${
                            project.paymentStatus === "paid"
                              ? "bg-green-100 text-green-800 border-green-200"
                              : "bg-yellow-100 text-yellow-800 border-yellow-200"
                          } text-xs`}
                        >
                          {project.paymentStatus === "paid" ? "✓ Paid" : "⏳ Pending"}
                        </Badge>
                      </div>

                      <div className="flex items-center space-x-4 mt-1">
                        <div className="flex items-center text-sm text-gray-600">
                          <DollarSign className="w-3 h-3 mr-1" />
                          {project.rate}
                        </div>
                        
                        {project.progress > 0 && (
                          <div className="flex items-center text-sm text-gray-600">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            {project.progress}% complete
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="px-4 pb-4 pt-0">
                <div className="space-y-4 mt-3 border-t border-gray-200 pt-4">
                  {/* Project Type */}
                  {project.type && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-700">Type:</span>
                      <Badge variant="outline" className="text-xs">
                        {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                      </Badge>
                    </div>
                  )}

                  {/* Description */}
                  {project.description && (
                    <div>
                      <span className="text-sm font-medium text-gray-700 block mb-1">
                        Description:
                      </span>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  )}

                  {/* Progress Bar */}
                  {project.progress > 0 && (
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700">Progress:</span>
                        <span className="text-sm text-gray-600">{project.progress}% complete</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-300 ease-out"
                          style={{ width: `${project.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex justify-end space-x-2 pt-2">
                    <Button variant="outline" size="sm" className="text-xs">
                      View Details
                    </Button>
                    <Button size="sm" className="text-xs">
                      Continue Work
                    </Button>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  );
};
