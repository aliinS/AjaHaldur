import * as React from "react"
import * as AlertDialogPrimitive from "@radix-ui/react-alert-dialog"

import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

const AlertDialogDesc = AlertDialogPrimitive.Root

const AlertDialogTriggerDesc = AlertDialogPrimitive.Trigger

const AlertDialogPortalDesc = AlertDialogPrimitive.Portal

const AlertDialogOverlayDesc = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Overlay
    className={cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
    ref={ref} />
))
AlertDialogOverlayDesc.displayName = AlertDialogPrimitive.Overlay.displayName

const AlertDialogContentDesc = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPortalDesc>
    <AlertDialogOverlayDesc />
    <AlertDialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-6xl max-h-2xl h-fit translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg border-gray-800 bg-[#EFEFEF]",
        className
      )}
      {...props} />
  </AlertDialogPortalDesc>
))
AlertDialogContentDesc.displayName = AlertDialogPrimitive.Content.displayName

const AlertDialogHeaderDesc = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col space-y-2 text-center sm:text-left", className)}
    {...props} />
)
AlertDialogHeaderDesc.displayName = "AlertDialogHeader"

const AlertDialogFooterDesc = ({
  className,
  ...props
}) => (
  <div
    className={cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className)}
    {...props} />
)
AlertDialogFooterDesc.displayName = "AlertDialogFooter"

const AlertDialogTitleDesc = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Title ref={ref} className={cn("text-lg font-semibold text-white", className)} {...props} />
))
AlertDialogTitleDesc.displayName = AlertDialogPrimitive.Title.displayName

const AlertDialogDescriptionDesc = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-gray-400", className)}
    {...props} />
))
AlertDialogDescriptionDesc.displayName =
  AlertDialogPrimitive.Description.displayName

const AlertDialogActionDesc = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Action ref={ref} className={cn(buttonVariants(), className)} {...props} />
))
AlertDialogActionDesc.displayName = AlertDialogPrimitive.Action.displayName

const AlertDialogCancelDesc = React.forwardRef(({ className, ...props }, ref) => (
  <AlertDialogPrimitive.Cancel
    ref={ref}
    className={cn(buttonVariants({ variant: "secondary" }), "mt-2 sm:mt-0", className)}
    {...props} />
))
AlertDialogCancelDesc.displayName = AlertDialogPrimitive.Cancel.displayName

export {
  AlertDialogDesc,
  AlertDialogPortalDesc,
  AlertDialogOverlayDesc,
  AlertDialogTriggerDesc,
  AlertDialogContentDesc,
  AlertDialogHeaderDesc,
  AlertDialogFooterDesc,
  AlertDialogTitleDesc,
  AlertDialogDescriptionDesc,
  AlertDialogActionDesc,
  AlertDialogCancelDesc,
}
