import * as React$1 from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { ClassValue } from 'clsx';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'ghost' | 'link';
type ButtonSize = 'small' | 'medium' | 'large';
interface ButtonProps extends React$1.ButtonHTMLAttributes<HTMLButtonElement> {
    /** Button visual variant */
    variant?: ButtonVariant;
    /** Button size */
    size?: ButtonSize;
    /** Show loading spinner */
    loading?: boolean;
    /** Icon-only mode with square padding */
    iconOnly?: boolean;
    /** Icon to display on the left side */
    leftIcon?: React$1.ReactNode;
    /** Icon to display on the right side */
    rightIcon?: React$1.ReactNode;
}
/**
 * Button component with multiple variants, sizes, and states.
 * Supports icons, loading state, and full keyboard accessibility.
 *
 * @example
 * <Button variant="primary" size="medium">Click me</Button>
 * <Button variant="danger" loading>Deleting...</Button>
 * <Button variant="ghost" leftIcon={<Icon />}>With Icon</Button>
 */
declare const Button: React$1.ForwardRefExoticComponent<ButtonProps & React$1.RefAttributes<HTMLButtonElement>>;

/** ACMG classification variants */
type ACMGVariant = 'pathogenic' | 'likely-pathogenic' | 'vus' | 'likely-benign' | 'benign';
/** AMP Tier variants */
type AMPTierVariant = 'tier-1' | 'tier-2' | 'tier-3' | 'tier-4';
/** Status variants */
type StatusVariant = 'success' | 'warning' | 'danger' | 'info' | 'neutral';
/** All tag variants */
type TagVariant = ACMGVariant | AMPTierVariant | StatusVariant;
interface TagProps {
    /** Tag visual variant */
    variant: TagVariant;
    /** Tag content */
    children: React$1.ReactNode;
    /** Optional icon to display before content */
    icon?: React$1.ReactNode;
    /** Whether the tag can be closed/removed */
    closable?: boolean;
    /** Callback when close button is clicked */
    onClose?: () => void;
    /** Additional CSS classes */
    className?: string;
    /** Native HTML title attribute for tooltip */
    title?: string;
}
/**
 * Tag component for displaying classifications, statuses, and labels.
 * Supports ACMG classifications, AMP Tiers, and general status variants.
 *
 * @example
 * <Tag variant="pathogenic">Pathogenic</Tag>
 * <Tag variant="tier-1">Tier I</Tag>
 * <Tag variant="success" icon={<CheckIcon />}>Approved</Tag>
 * <Tag variant="info" closable onClose={() => {}}>Removable</Tag>
 */
declare const Tag: React$1.FC<TagProps>;

type LabelPosition = 'top' | 'left';
interface FormContextValue {
    labelPosition: LabelPosition;
    labelWidth: number;
}
declare const useFormContext: () => FormContextValue;
interface FormProps extends React$1.FormHTMLAttributes<HTMLFormElement> {
    /** Label position for all form items */
    labelPosition?: LabelPosition;
    /** Label width when labelPosition is 'left' (in pixels) */
    labelWidth?: number;
    /** Callback when form is submitted with validation */
    onValidSubmit?: (data: FormData) => void;
}
/**
 * Form component that provides context for form items and handles validation.
 * Supports top-aligned and left-aligned label positioning.
 *
 * @example
 * <Form labelPosition="top" onSubmit={handleSubmit}>
 *   <FormItem label="Name" required>
 *     <Input />
 *   </FormItem>
 * </Form>
 */
declare const Form: React$1.ForwardRefExoticComponent<FormProps & React$1.RefAttributes<HTMLFormElement>>;

interface FormItemProps {
    /** Label text for the form item */
    label?: string;
    /** Whether the field is required */
    required?: boolean;
    /** Error message to display */
    error?: string;
    /** Hint text to display below the input */
    hint?: string;
    /** HTML id for the input (used for label association) */
    htmlFor?: string;
    /** Additional class names */
    className?: string;
    /** Form control element */
    children: React$1.ReactNode;
}
/**
 * FormItem component that wraps form controls with label, error, and hint.
 * Automatically adapts to the Form's labelPosition setting.
 *
 * @example
 * <FormItem label="Email" required error="Invalid email">
 *   <Input type="email" />
 * </FormItem>
 */
declare const FormItem: React$1.FC<FormItemProps>;

interface InputProps extends React$1.InputHTMLAttributes<HTMLInputElement> {
    /** Whether the input has an error state */
    error?: boolean;
    /** Element to display on the left side of the input */
    leftElement?: React$1.ReactNode;
    /** Element to display on the right side of the input */
    rightElement?: React$1.ReactNode;
    /** Error message to display (also used for aria-describedby) */
    errorMessage?: string;
    /** Hint text to display below the input */
    hint?: string;
}
/**
 * Input component with support for error states and left/right elements.
 * Default height is 32px with 1px border, focus state shows 2px accent border.
 * Supports WCAG 2.1 AA accessibility requirements.
 *
 * @example
 * <Input placeholder="Enter text" />
 * <Input error errorMessage="This field is required" />
 * <Input leftElement={<SearchIcon />} />
 * <Input rightElement={<Button variant="ghost" iconOnly><ClearIcon /></Button>} />
 */
declare const Input: React$1.ForwardRefExoticComponent<InputProps & React$1.RefAttributes<HTMLInputElement>>;

interface SelectOption<T = string> {
    value: T;
    label: string;
    disabled?: boolean;
}
interface SelectProps<T = string> {
    /** Available options */
    options: SelectOption<T>[];
    /** Current value (single or array for multi-select) */
    value?: T | T[];
    /** Callback when value changes */
    onChange?: (value: T | T[]) => void;
    /** Enable multi-select mode */
    multiple?: boolean;
    /** Enable search/filter functionality */
    searchable?: boolean;
    /** Placeholder text when no value selected */
    placeholder?: string;
    /** Disable the select */
    disabled?: boolean;
    /** Show error state */
    error?: boolean;
    /** Additional class names */
    className?: string;
    /** Name attribute for form submission */
    name?: string;
}
/**
 * Select component supporting single and multi-select modes with optional search.
 * Built on Radix UI Select for accessibility.
 *
 * @example
 * <Select
 *   options={[{ value: 'a', label: 'Option A' }]}
 *   value={selected}
 *   onChange={setSelected}
 * />
 */
declare function Select<T extends string = string>({ options, value, onChange, multiple, searchable, placeholder, disabled, error, className, name, }: SelectProps<T>): react_jsx_runtime.JSX.Element;
declare namespace Select {
    var displayName: string;
}

interface CheckboxProps extends Omit<React$1.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>, 'type'> {
    /** Show indeterminate state (partial selection) */
    indeterminate?: boolean;
    /** Label text to display next to checkbox */
    label?: string;
}
/**
 * Checkbox component with support for indeterminate state.
 * Built on Radix UI Checkbox for accessibility.
 *
 * @example
 * <Checkbox label="Accept terms" checked={checked} onCheckedChange={setChecked} />
 * <Checkbox indeterminate label="Select all" />
 */
declare const Checkbox: React$1.ForwardRefExoticComponent<CheckboxProps & React$1.RefAttributes<HTMLButtonElement>>;

interface RadioOption<T = string> {
    value: T;
    label: string;
    disabled?: boolean;
}
interface RadioGroupProps<T = string> {
    /** Available options */
    options: RadioOption<T>[];
    /** Current selected value */
    value?: T;
    /** Callback when value changes */
    onChange?: (value: T) => void;
    /** Layout orientation */
    orientation?: 'horizontal' | 'vertical';
    /** Name attribute for form submission */
    name: string;
    /** Disable all radio buttons */
    disabled?: boolean;
    /** Additional class names */
    className?: string;
}
/**
 * RadioGroup component with horizontal and vertical layout support.
 * Built on Radix UI RadioGroup for accessibility.
 *
 * @example
 * <RadioGroup
 *   name="size"
 *   options={[
 *     { value: 'small', label: 'Small' },
 *     { value: 'medium', label: 'Medium' },
 *   ]}
 *   value={size}
 *   onChange={setSize}
 *   orientation="horizontal"
 * />
 */
declare function RadioGroup<T extends string = string>({ options, value, onChange, orientation, name, disabled, className, }: RadioGroupProps<T>): react_jsx_runtime.JSX.Element;
declare namespace RadioGroup {
    var displayName: string;
}

interface TextAreaProps extends React$1.TextareaHTMLAttributes<HTMLTextAreaElement> {
    /** Enable auto-resize based on content */
    autoResize?: boolean;
    /** Show error state */
    error?: boolean;
    /** Minimum number of rows */
    minRows?: number;
    /** Maximum number of rows (for auto-resize) */
    maxRows?: number;
}
/**
 * TextArea component with optional auto-resize functionality.
 * Automatically adjusts height based on content when autoResize is enabled.
 *
 * @example
 * <TextArea placeholder="Enter description" />
 * <TextArea autoResize minRows={3} maxRows={10} />
 */
declare const TextArea: React$1.ForwardRefExoticComponent<TextAreaProps & React$1.RefAttributes<HTMLTextAreaElement>>;

type AvatarSize = 'small' | 'medium' | 'large';
type AvatarStatus = 'online' | 'offline' | 'busy';
interface AvatarProps {
    /** Image source URL */
    src?: string;
    /** Alt text for the image */
    alt?: string;
    /** User name for generating initials fallback */
    name?: string;
    /** Avatar size */
    size?: AvatarSize;
    /** Status indicator */
    status?: AvatarStatus;
    /** Additional CSS classes */
    className?: string;
}
/**
 * Avatar component for displaying user profile images with fallback to initials.
 * Supports multiple sizes and optional status indicators.
 * Compliant with WCAG 2.1 AA accessibility requirements.
 *
 * @example
 * <Avatar src="/user.jpg" alt="John Doe" size="medium" />
 * <Avatar name="John Doe" size="large" status="online" />
 * <Avatar name="Jane Smith" size="small" />
 */
declare const Avatar: React$1.ForwardRefExoticComponent<AvatarProps & React$1.RefAttributes<HTMLDivElement>>;

interface AvatarGroupProps {
    /** Avatar elements to display */
    children: React$1.ReactNode;
    /** Maximum number of avatars to display before showing overflow count */
    max?: number;
    /** Size for all avatars in the group */
    size?: AvatarSize;
    /** Additional CSS classes */
    className?: string;
}
/**
 * AvatarGroup component for displaying multiple avatars with overlap.
 * Shows an overflow indicator when there are more avatars than the max limit.
 *
 * @example
 * <AvatarGroup max={3} size="medium">
 *   <Avatar name="John Doe" />
 *   <Avatar name="Jane Smith" />
 *   <Avatar name="Bob Wilson" />
 *   <Avatar name="Alice Brown" />
 * </AvatarGroup>
 */
declare const AvatarGroup: React$1.FC<AvatarGroupProps>;

interface HeaderProps extends React$1.HTMLAttributes<HTMLElement> {
    /** Logo element displayed on the left */
    logo: React$1.ReactNode;
    /** Main navigation element */
    navigation?: React$1.ReactNode;
    /** Search element */
    search?: React$1.ReactNode;
    /** User menu element displayed on the right */
    userMenu?: React$1.ReactNode;
}
/**
 * Header component with fixed height of 48px.
 * Provides slots for logo, navigation, search, and user menu.
 * Uses semantic HTML with proper ARIA landmarks for accessibility.
 *
 * @example
 * <Header
 *   logo={<Logo />}
 *   navigation={<Nav />}
 *   search={<SearchInput />}
 *   userMenu={<UserMenu />}
 * />
 */
declare const Header: React$1.ForwardRefExoticComponent<HeaderProps & React$1.RefAttributes<HTMLElement>>;

interface SidebarProps extends React$1.HTMLAttributes<HTMLElement> {
    /** Sidebar content (typically SidebarItem components) */
    children: React$1.ReactNode;
    /** Whether the sidebar is collapsed */
    collapsed?: boolean;
    /** Callback when collapsed state changes */
    onCollapsedChange?: (collapsed: boolean) => void;
    /** Width of the sidebar when expanded (default: 240px) */
    width?: number;
    /** Width of the sidebar when collapsed (default: 64px) */
    collapsedWidth?: number;
    /** Accessible label for the sidebar navigation */
    'aria-label'?: string;
}
/**
 * Sidebar component with collapsible mode and responsive behavior.
 * Default width is 240px, automatically collapses below 1280px viewport.
 * Supports keyboard navigation and WCAG 2.1 AA accessibility requirements.
 *
 * @example
 * <Sidebar collapsed={collapsed} onCollapsedChange={setCollapsed}>
 *   <SidebarItem icon={<HomeIcon />} label="Home" href="/" active />
 *   <SidebarItem icon={<SettingsIcon />} label="Settings" href="/settings" />
 * </Sidebar>
 */
declare const Sidebar: React$1.ForwardRefExoticComponent<SidebarProps & React$1.RefAttributes<HTMLElement>>;
interface SidebarContextValue {
    collapsed: boolean;
}
declare const useSidebarContext: () => SidebarContextValue;

interface SidebarItemProps extends React$1.HTMLAttributes<HTMLElement> {
    /** Icon element displayed on the left */
    icon?: React$1.ReactNode;
    /** Label text for the item */
    label: string;
    /** Link href (renders as anchor if provided) */
    href?: string;
    /** Whether this item is currently active */
    active?: boolean;
    /** Nested items (for expandable sections) */
    children?: React$1.ReactNode;
    /** Click handler */
    onClick?: () => void;
}
/**
 * SidebarItem component for navigation items within a Sidebar.
 * Supports icons, active state, and nested children.
 * Automatically adapts to collapsed sidebar state.
 *
 * @example
 * <SidebarItem icon={<HomeIcon />} label="Home" href="/" active />
 * <SidebarItem icon={<SettingsIcon />} label="Settings" onClick={handleClick} />
 */
declare const SidebarItem: React$1.ForwardRefExoticComponent<SidebarItemProps & React$1.RefAttributes<HTMLElement>>;

interface BreadcrumbItem {
    /** Label text for the breadcrumb item */
    label: string;
    /** Link href (makes the item clickable if provided) */
    href?: string;
}
interface BreadcrumbProps extends React$1.HTMLAttributes<HTMLElement> {
    /** Array of breadcrumb items to display */
    items: BreadcrumbItem[];
    /** Custom separator element (default: "/") */
    separator?: React$1.ReactNode;
}
/**
 * Breadcrumb component for displaying navigation path.
 * All items except the last one are clickable links.
 * Supports custom separators between items.
 *
 * @example
 * <Breadcrumb
 *   items={[
 *     { label: 'Home', href: '/' },
 *     { label: 'Products', href: '/products' },
 *     { label: 'Current Page' }
 *   ]}
 * />
 *
 * @example
 * // With custom separator
 * <Breadcrumb
 *   items={items}
 *   separator={<ChevronRightIcon />}
 * />
 */
declare const Breadcrumb: React$1.ForwardRefExoticComponent<BreadcrumbProps & React$1.RefAttributes<HTMLElement>>;

interface BottomNavItem {
    /** Unique identifier for the item */
    id: string;
    /** Icon element displayed above the label */
    icon: React$1.ReactNode;
    /** Label text for the item */
    label: string;
    /** Link href (renders as anchor if provided) */
    href?: string;
    /** Whether this item is currently active */
    active?: boolean;
    /** Click handler */
    onClick?: () => void;
}
interface BottomNavProps extends React$1.HTMLAttributes<HTMLElement> {
    /** Navigation items to display */
    items: BottomNavItem[];
    /** Maximum number of items to display (default: 5) */
    maxItems?: number;
}
/**
 * BottomNav component for mobile navigation (< 768px viewport).
 * Displays a fixed bottom navigation bar with icon and label for each item.
 * Automatically hides on larger viewports.
 *
 * @example
 * <BottomNav
 *   items={[
 *     { id: 'home', icon: <HomeIcon />, label: 'Home', href: '/', active: true },
 *     { id: 'search', icon: <SearchIcon />, label: 'Search', href: '/search' },
 *     { id: 'profile', icon: <UserIcon />, label: 'Profile', href: '/profile' },
 *   ]}
 * />
 */
declare const BottomNav: React$1.ForwardRefExoticComponent<BottomNavProps & React$1.RefAttributes<HTMLElement>>;

type ModalSize = 'small' | 'medium' | 'large' | 'fullscreen';
interface ModalProps {
    /** Whether the modal is open */
    open: boolean;
    /** Callback when open state changes */
    onOpenChange: (open: boolean) => void;
    /** Modal size variant */
    size?: ModalSize;
    /** Whether pressing Escape closes the modal */
    closeOnEscape?: boolean;
    /** Whether clicking the overlay closes the modal */
    closeOnOverlayClick?: boolean;
    /** Modal content */
    children: React$1.ReactNode;
    /** Additional class name for the modal content */
    className?: string;
}
/**
 * Modal component built on Radix UI Dialog.
 * Provides focus trapping, keyboard navigation, and accessible modal dialogs.
 *
 * @example
 * <Modal open={isOpen} onOpenChange={setIsOpen} size="medium">
 *   <ModalHeader>Title</ModalHeader>
 *   <ModalBody>Content</ModalBody>
 *   <ModalFooter>
 *     <Button onClick={() => setIsOpen(false)}>Close</Button>
 *   </ModalFooter>
 * </Modal>
 */
declare const Modal: React$1.FC<ModalProps>;

interface ModalHeaderProps {
    /** Header content (typically the title) */
    children: React$1.ReactNode;
    /** Whether to show the close button */
    showCloseButton?: boolean;
    /** Additional class name */
    className?: string;
}
/**
 * Modal header component with optional close button.
 * Should be used as a direct child of Modal.
 *
 * @example
 * <ModalHeader showCloseButton>
 *   Modal Title
 * </ModalHeader>
 */
declare const ModalHeader: React$1.FC<ModalHeaderProps>;

interface ModalBodyProps {
    /** Body content */
    children: React$1.ReactNode;
    /** Additional class name */
    className?: string;
}
/**
 * Modal body component for the main content area.
 * Should be used as a direct child of Modal.
 *
 * @example
 * <ModalBody>
 *   <p>Modal content goes here...</p>
 * </ModalBody>
 */
declare const ModalBody: React$1.FC<ModalBodyProps>;

interface ModalFooterProps {
    /** Footer content (typically action buttons) */
    children: React$1.ReactNode;
    /** Additional class name */
    className?: string;
}
/**
 * Modal footer component for action buttons.
 * Should be used as a direct child of Modal.
 *
 * @example
 * <ModalFooter>
 *   <Button variant="secondary" onClick={onCancel}>Cancel</Button>
 *   <Button variant="primary" onClick={onConfirm}>Confirm</Button>
 * </ModalFooter>
 */
declare const ModalFooter: React$1.FC<ModalFooterProps>;

type DialogType = 'confirm' | 'alert' | 'prompt';
interface DialogProps {
    /** Dialog type determines the UI pattern */
    type: DialogType;
    /** Dialog title */
    title: string;
    /** Dialog message/description */
    message: string;
    /** Text for the confirm button */
    confirmText?: string;
    /** Text for the cancel button */
    cancelText?: string;
    /** Callback when user confirms (receives input value for prompt type) */
    onConfirm?: (value?: string) => void;
    /** Callback when user cancels */
    onCancel?: () => void;
    /** Whether the dialog is open */
    open: boolean;
    /** Callback when open state changes */
    onOpenChange: (open: boolean) => void;
    /** Placeholder text for prompt input */
    placeholder?: string;
    /** Default value for prompt input */
    defaultValue?: string;
    /** Additional class name */
    className?: string;
}
/**
 * Dialog component with pre-built patterns for common use cases.
 * Supports confirm, alert, and prompt dialog types.
 * Compliant with WCAG 2.1 AA accessibility requirements.
 *
 * @example
 * // Confirm dialog
 * <Dialog
 *   type="confirm"
 *   title="Delete Item"
 *   message="Are you sure you want to delete this item?"
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   onConfirm={() => handleDelete()}
 *   onCancel={() => setIsOpen(false)}
 * />
 *
 * // Alert dialog
 * <Dialog
 *   type="alert"
 *   title="Success"
 *   message="Your changes have been saved."
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   onConfirm={() => setIsOpen(false)}
 * />
 *
 * // Prompt dialog
 * <Dialog
 *   type="prompt"
 *   title="Rename File"
 *   message="Enter a new name for the file:"
 *   open={isOpen}
 *   onOpenChange={setIsOpen}
 *   onConfirm={(value) => handleRename(value)}
 *   onCancel={() => setIsOpen(false)}
 * />
 */
declare const Dialog: React$1.FC<DialogProps>;

type Placement = 'top' | 'right' | 'bottom' | 'left';
type TooltipVariant = 'default' | 'nav';
interface TooltipProps {
    /** Content to display in the tooltip */
    content: React$1.ReactNode;
    /** Placement position of the tooltip */
    placement?: Placement;
    /** Delay in milliseconds before showing the tooltip */
    delay?: number;
    /** The trigger element */
    children: React$1.ReactElement;
    /** Additional class name for the tooltip content */
    className?: string;
    /** Visual variant of the tooltip */
    variant?: TooltipVariant;
}
/**
 * Tooltip component for displaying contextual information on hover.
 * Built on Radix UI Tooltip for accessibility and automatic repositioning.
 *
 * @example
 * <Tooltip content="This is a tooltip">
 *   <button>Hover me</button>
 * </Tooltip>
 */
declare function Tooltip({ content, placement, delay, children, className, variant, }: TooltipProps): JSX.Element;
declare namespace Tooltip {
    var displayName: string;
}

interface PopoverProps {
    /** Content to display in the popover */
    content: React$1.ReactNode;
    /** Placement position of the popover */
    placement?: Placement;
    /** Trigger mode: 'click' or 'hover' */
    trigger?: 'click' | 'hover';
    /** Controlled open state */
    open?: boolean;
    /** Callback when open state changes */
    onOpenChange?: (open: boolean) => void;
    /** The trigger element */
    children: React$1.ReactElement;
    /** Additional class name for the popover content */
    className?: string;
}
/**
 * Popover component for displaying rich content in a floating panel.
 * Built on Radix UI Popover for accessibility and positioning.
 *
 * @example
 * <Popover content={<div>Popover content</div>}>
 *   <button>Click me</button>
 * </Popover>
 */
declare function Popover({ content, placement, trigger, open, onOpenChange, children, className, }: PopoverProps): JSX.Element;
declare namespace Popover {
    var displayName: string;
}

type RowDensity = 'compact' | 'default' | 'comfortable';
type SortDirection = 'asc' | 'desc' | null;
interface Column<T> {
    /** Unique column identifier */
    id: string;
    /** Column header content */
    header: string | React$1.ReactNode;
    /** Data accessor - key or function */
    accessor: keyof T | ((row: T) => React$1.ReactNode);
    /** Column width in pixels */
    width?: number;
    /** Minimum column width */
    minWidth?: number;
    /** Maximum column width */
    maxWidth?: number;
    /** Enable sorting for this column */
    sortable?: boolean;
    /** Pin column to left or right */
    pinned?: 'left' | 'right';
    /** Column visibility */
    visible?: boolean;
    /** Column alignment */
    align?: 'left' | 'center' | 'right';
}
interface DataTableProps<T> {
    /** Table data array */
    data: T[];
    /** Column definitions */
    columns: Column<T>[];
    /** Unique row identifier */
    rowKey: keyof T | ((row: T) => string);
    /** Enable row selection */
    selectable?: boolean;
    /** Selection mode */
    selectionMode?: 'single' | 'multiple';
    /** Currently selected row keys */
    selectedRows?: Set<string>;
    /** Selection change callback */
    onSelectionChange?: (selectedRows: Set<string>) => void;
    /** Enable row expansion */
    expandable?: boolean;
    /** Currently expanded row keys */
    expandedRows?: Set<string>;
    /** Expansion change callback */
    onExpandChange?: (expandedRows: Set<string>) => void;
    /** Render function for expanded content */
    renderExpandedRow?: (row: T) => React$1.ReactNode;
    /** Current sort column id */
    sortColumn?: string;
    /** Current sort direction */
    sortDirection?: SortDirection;
    /** Sort change callback */
    onSortChange?: (column: string, direction: SortDirection) => void;
    /** Row density mode */
    density?: RowDensity;
    /** Enable zebra striping */
    striped?: boolean;
    /** Sticky header */
    stickyHeader?: boolean;
    /** Row count threshold for virtualization */
    virtualizeThreshold?: number;
    /** Row height for virtualization */
    rowHeight?: number;
    /** Row click callback */
    onRowClick?: (row: T) => void;
    /** Row double click callback */
    onRowDoubleClick?: (row: T) => void;
    /** Column widths state */
    columnWidths?: Map<string, number>;
    /** Column width change callback */
    onColumnWidthChange?: (columnId: string, width: number) => void;
    /** Additional CSS classes */
    className?: string;
}
/**
 * DataTable component for displaying tabular data with advanced features.
 * Supports fixed header, column pinning, row selection, expansion, sorting,
 * virtual scrolling, and customizable row density.
 *
 * @example
 * <DataTable
 *   data={users}
 *   columns={[
 *     { id: 'name', header: 'Name', accessor: 'name' },
 *     { id: 'email', header: 'Email', accessor: 'email' },
 *   ]}
 *   rowKey="id"
 *   density="default"
 *   striped
 * />
 */
declare function DataTable<T>({ data, columns, rowKey, selectable, selectionMode, selectedRows, onSelectionChange, expandable, expandedRows, onExpandChange, renderExpandedRow, sortColumn, sortDirection, onSortChange, density, striped, stickyHeader, virtualizeThreshold, columnWidths: externalColumnWidths, onColumnWidthChange, onRowClick, onRowDoubleClick, className, }: DataTableProps<T>): JSX.Element;
declare namespace DataTable {
    var displayName: string;
}

/**
 * Utility function to merge class names with Tailwind CSS conflict resolution.
 * Combines clsx for conditional classes and tailwind-merge for deduplication.
 *
 * @param inputs - Class values to merge (strings, arrays, objects)
 * @returns Merged class string with Tailwind conflicts resolved
 *
 * @example
 * cn('px-2 py-1', 'px-4') // => 'py-1 px-4'
 * cn('text-red-500', condition && 'text-blue-500') // => 'text-blue-500' if condition is true
 */
declare function cn(...inputs: ClassValue[]): string;

/**
 * Accessibility utility functions for UI components
 * Supports WCAG 2.1 AA compliance - Requirements 11.1, 11.2, 11.3, 11.6, 11.7
 */
/**
 * Generates a unique ID for accessibility attributes.
 * Useful for linking labels to inputs, descriptions to elements, etc.
 *
 * @param prefix - Optional prefix for the ID
 * @returns A unique string ID
 */
declare function generateId(prefix?: string): string;
/**
 * Checks if the user prefers reduced motion.
 * Useful for disabling animations for users who have this preference set.
 * Supports Requirements 11.7
 *
 * @returns true if the user prefers reduced motion
 */
declare function prefersReducedMotion(): boolean;
/**
 * Hook to subscribe to reduced motion preference changes.
 * Returns current preference and updates when system setting changes.
 *
 * @returns Current reduced motion preference
 */
declare function useReducedMotion(): boolean;
/**
 * Checks if the user prefers high contrast mode.
 *
 * @returns true if the user prefers high contrast
 */
declare function prefersHighContrast(): boolean;
/**
 * Creates an object with common ARIA attributes for interactive elements.
 * Supports Requirements 11.3
 *
 * @param options - Configuration options
 * @returns Object with ARIA attributes
 */
declare function getAriaProps(options: {
    label?: string;
    labelledBy?: string;
    describedBy?: string;
    expanded?: boolean;
    selected?: boolean;
    disabled?: boolean;
    hidden?: boolean;
    live?: 'polite' | 'assertive' | 'off';
    role?: string;
    pressed?: boolean;
    checked?: boolean | 'mixed';
    controls?: string;
    owns?: string;
    haspopup?: boolean | 'menu' | 'listbox' | 'tree' | 'grid' | 'dialog';
    current?: boolean | 'page' | 'step' | 'location' | 'date' | 'time';
}): Record<string, string | boolean | undefined>;
/**
 * Handles keyboard navigation for lists and menus.
 * Returns the next index based on the key pressed.
 * Supports Requirements 11.2
 *
 * @param event - Keyboard event
 * @param currentIndex - Current focused index
 * @param itemCount - Total number of items
 * @param options - Navigation options
 * @returns New index or null if no navigation occurred
 */
declare function handleListKeyboardNavigation(event: KeyboardEvent, currentIndex: number, itemCount: number, options?: {
    orientation?: 'horizontal' | 'vertical';
    loop?: boolean;
}): number | null;
/**
 * Handles keyboard navigation for grid-based layouts.
 * Supports Requirements 11.2
 *
 * @param event - Keyboard event
 * @param currentIndex - Current focused index
 * @param columnCount - Number of columns in the grid
 * @param itemCount - Total number of items
 * @param options - Navigation options
 * @returns New index or null if no navigation occurred
 */
declare function handleGridKeyboardNavigation(event: KeyboardEvent, currentIndex: number, columnCount: number, itemCount: number, options?: {
    loop?: boolean;
}): number | null;
/**
 * Announces a message to screen readers using a live region.
 * Supports Requirements 11.5
 *
 * @param message - Message to announce
 * @param priority - Priority level ('polite' or 'assertive')
 */
declare function announceToScreenReader(message: string, priority?: 'polite' | 'assertive'): void;
/**
 * Creates a visually hidden element for screen readers.
 * Useful for providing additional context that shouldn't be visible.
 *
 * @returns CSS styles for visually hidden content
 */
declare function getVisuallyHiddenStyles(): React.CSSProperties;
/**
 * Traps focus within a container element.
 * Returns a cleanup function to restore normal focus behavior.
 *
 * @param container - Container element to trap focus within
 * @returns Cleanup function
 */
declare function trapFocus(container: HTMLElement): () => void;
/**
 * Checks if an element is focusable.
 * Supports Requirements 11.2
 *
 * @param element - Element to check
 * @returns true if the element is focusable
 */
declare function isFocusable(element: HTMLElement): boolean;
/**
 * Gets all focusable elements within a container.
 * Supports Requirements 11.2
 *
 * @param container - Container element to search within
 * @returns Array of focusable elements
 */
declare function getFocusableElements(container: HTMLElement): HTMLElement[];
/**
 * Manages roving tabindex for a group of elements.
 * Only one element in the group should be tabbable at a time.
 * Supports Requirements 11.2
 *
 * @param elements - Array of elements in the group
 * @param activeIndex - Index of the currently active element
 */
declare function setRovingTabindex(elements: HTMLElement[], activeIndex: number): void;
/**
 * Creates a skip link for keyboard navigation.
 * Allows users to skip repetitive content.
 * Supports Requirements 11.2
 *
 * @param targetId - ID of the element to skip to
 * @param label - Label for the skip link
 * @returns Skip link element
 */
declare function createSkipLink(targetId: string, label?: string): HTMLAnchorElement;
/**
 * Validates color contrast ratio meets WCAG requirements.
 * Supports Requirements 11.4
 *
 * @param foreground - Foreground color in hex format
 * @param background - Background color in hex format
 * @param level - WCAG level ('AA' or 'AAA')
 * @param isLargeText - Whether the text is large (18pt+ or 14pt+ bold)
 * @returns true if contrast ratio meets requirements
 */
declare function meetsContrastRequirements(foreground: string, background: string, level?: 'AA' | 'AAA', isLargeText?: boolean): boolean;
/**
 * Calculates the contrast ratio between two colors.
 * Supports Requirements 11.4
 *
 * @param color1 - First color in hex format
 * @param color2 - Second color in hex format
 * @returns Contrast ratio
 */
declare function getContrastRatio(color1: string, color2: string): number;

type Theme = 'light' | 'dark' | 'system';
interface ThemeContextValue {
    theme: Theme;
    resolvedTheme: 'light' | 'dark';
    setTheme: (theme: Theme) => void;
}
interface ThemeProviderProps {
    children: React$1.ReactNode;
    defaultTheme?: Theme;
    storageKey?: string;
}
/**
 * ThemeProvider component that manages theme state
 *
 * Features:
 * - Supports light, dark, and system themes
 * - Persists theme preference to localStorage
 * - Detects system theme preference
 * - Applies theme class to document root
 */
declare function ThemeProvider({ children, defaultTheme, storageKey, }: ThemeProviderProps): JSX.Element;
/**
 * Hook to access theme context
 *
 * @throws Error if used outside of ThemeProvider
 */
declare function useTheme(): ThemeContextValue;

type ColorToken = 'canvas-default' | 'canvas-subtle' | 'canvas-inset' | 'fg-default' | 'fg-muted' | 'fg-subtle' | 'fg-on-emphasis' | 'border-default' | 'border-muted' | 'border-subtle' | 'accent-fg' | 'accent-emphasis' | 'accent-muted' | 'accent-subtle' | 'success-fg' | 'success-emphasis' | 'success-subtle' | 'warning-fg' | 'warning-emphasis' | 'warning-subtle' | 'danger-fg' | 'danger-emphasis' | 'danger-subtle';
type ACMGClassification = 'pathogenic' | 'likely-pathogenic' | 'vus' | 'likely-benign' | 'benign';
type AMPTier = 'tier-1' | 'tier-2' | 'tier-3' | 'tier-4';
type VariantType = 'snv' | 'indel' | 'cnv-gain' | 'cnv-loss' | 'fusion';
type SpacingToken = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
type BorderRadiusToken = 'small' | 'medium' | 'large' | 'full';
type ShadowToken = 'small' | 'medium' | 'large' | 'extra-large';
type DurationToken = 'fast' | 'normal' | 'slow';

export { type ACMGClassification, type ACMGVariant, type AMPTier, type AMPTierVariant, Avatar, AvatarGroup, type AvatarGroupProps, type AvatarProps, type AvatarSize, type AvatarStatus, type BorderRadiusToken, BottomNav, type BottomNavItem, type BottomNavProps, Breadcrumb, type BreadcrumbItem, type BreadcrumbProps, Button, type ButtonProps, type ButtonSize, type ButtonVariant, Checkbox, type CheckboxProps, type ColorToken, type Column, DataTable, type DataTableProps, Dialog, type DialogProps, type DialogType, type DurationToken, Form, type FormContextValue, FormItem, type FormItemProps, type FormProps, Header, type HeaderProps, Input, type InputProps, type LabelPosition, Modal, ModalBody, type ModalBodyProps, ModalFooter, type ModalFooterProps, ModalHeader, type ModalHeaderProps, type ModalProps, type ModalSize, type Placement, Popover, type PopoverProps, RadioGroup, type RadioGroupProps, type RadioOption, type RowDensity, Select, type SelectOption, type SelectProps, type ShadowToken, Sidebar, SidebarItem, type SidebarItemProps, type SidebarProps, type SortDirection, type SpacingToken, type StatusVariant, Tag, type TagProps, type TagVariant, TextArea, type TextAreaProps, type Theme, type ThemeContextValue, ThemeProvider, type ThemeProviderProps, Tooltip, type TooltipProps, type VariantType, announceToScreenReader, cn, createSkipLink, generateId, getAriaProps, getContrastRatio, getFocusableElements, getVisuallyHiddenStyles, handleGridKeyboardNavigation, handleListKeyboardNavigation, isFocusable, meetsContrastRequirements, prefersHighContrast, prefersReducedMotion, setRovingTabindex, trapFocus, useFormContext, useReducedMotion, useSidebarContext, useTheme };
