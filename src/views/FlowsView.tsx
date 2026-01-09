import React, { useState } from 'react';
import { USER_FLOWS } from '../data/architecture';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, User } from 'lucide-react';
import { cn } from '../lib/utils';

export default function FlowsView() {
  const [activeFlowId, setActiveFlowId] = useState(USER_FLOWS[0].id);
  const activeFlow = USER_FLOWS.find(f => f.id === activeFlowId) || USER_FLOWS[0];

  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-3xl font-bold text-neutral-900">Flujos de Usuario Principales</h2>
        <p className="text-neutral-500 mt-2 text-lg">
          Diseñados para cubrir las 3 intenciones de búsqueda: Específica, Geográfica y Emocional.
        </p>
      </header>

      <div className="grid md:grid-cols-3 gap-4">
        {USER_FLOWS.map(flow => (
          <button
            key={flow.id}
            onClick={() => setActiveFlowId(flow.id)}
            className={cn(
              "p-4 text-left rounded-xl border transition-all",
              activeFlowId === flow.id 
                ? "bg-black text-white border-black shadow-lg" 
                : "bg-white text-neutral-500 border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50"
            )}
          >
            <div className="font-bold mb-1">{flow.title}</div>
            <div className={cn("text-xs", activeFlowId === flow.id ? "text-neutral-400" : "text-neutral-400")}>
              {flow.description}
            </div>
          </button>
        ))}
      </div>

      <div className="bg-white p-8 rounded-xl border border-neutral-200 shadow-sm min-h-[400px]">
        <div className="flex items-center gap-2 mb-8 text-neutral-400 text-sm uppercase tracking-widest font-bold">
          <User size={16} />
          Recorrido del Usuario
        </div>

        <div className="relative">
          {/* Línea de tiempo vertical */}
          <div className="absolute left-6 top-4 bottom-4 w-[2px] bg-neutral-100"></div>

          <div className="space-y-8">
            {activeFlow.steps.map((step, index) => (
              <motion.div 
                key={step.label + activeFlowId}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative pl-16"
              >
                {/* Step Circle */}
                <div className={cn(
                  "absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center font-bold text-sm shadow-sm z-10 border-4 border-white",
                  index === activeFlow.steps.length - 1 ? "bg-green-500 text-white" : "bg-neutral-900 text-white"
                )}>
                  {index + 1}
                </div>

                <div className="bg-neutral-50 border border-neutral-100 p-5 rounded-lg hover:border-neutral-300 transition-colors group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
                    <h4 className="font-bold text-neutral-900 text-lg">{step.label}</h4>
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-neutral-500 bg-white px-3 py-1 rounded-full border border-neutral-200 inline-block w-fit">
                      {step.screen}
                    </span>
                  </div>
                  <p className="text-neutral-600">{step.detail}</p>
                </div>
                
                {index !== activeFlow.steps.length - 1 && (
                  <div className="absolute left-[22px] -bottom-6 text-neutral-300">
                    <ArrowRight className="rotate-90" size={16} />
                  </div>
                )}
              </motion.div>
            ))}

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pl-16 pt-4"
            >
              <div className="flex items-center gap-3 text-green-700 font-bold bg-green-50 p-4 rounded-lg border border-green-100">
                <CheckCircle2 />
                <span>Conversión Exitosa</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
