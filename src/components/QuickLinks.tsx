"use client";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
  } from "@/components/ui/sidebar"
//   import { useAppContext } from "@/context/AppContext";
   
  export function QuickLinks() {
// const {data, setData} = useAppContext();
    return (
        <Sidebar variant="inset">
        <SidebarContent>
          <SidebarGroup>
            <a className="hover:text-[#FF4649]" href="#clipper-crash-course">Clipper Crash Course</a>
          </SidebarGroup>
          <SidebarGroup>
            <a className="hover:text-[#FF4649]" href="#barber-essentials">Barber Essentials</a>
          </SidebarGroup>
          <SidebarGroup>
            <a className="hover:text-[#FF4649]" href="#barber-shop-etiquette">Barber Shop Etiquette</a>
          </SidebarGroup>
          <SidebarGroup>
            <a className="hover:text-[#FF4649]" href="#proper-hygiene">Proper Hygiene</a>
          </SidebarGroup>
          <SidebarGroup>
            <a className="hover:text-[#FF4649]" href="#hair-growth-essentials">Hair Growth Essentials</a>
          </SidebarGroup>
          <SidebarGroup>
            <a className="hover:text-[#FF4649]" href="#why-mens-hair">Why Men's Hair?</a>
          </SidebarGroup>
          <SidebarGroup>
            <a className="hover:text-[#FF4649]" href="#credits">Credits/Contact</a>
          </SidebarGroup>
        </SidebarContent>
        </Sidebar>
    )
  }